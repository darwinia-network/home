export const cases: {
  title: string;
  code: string;
  link: string;
  description: string;
  language: "solidity" | "javascript";
}[] = [
  {
    title: "xAccount",
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @dev ISafeXAccountFactory represents a factory contract responsible for the creation of SafeXAccounts.
interface ISafeXAccountFactory {
    /// @dev Cross chian function for create SafeXAccount on target chain.
    /// @notice If recovery address is \`address(0)\`, do not enabale recovery module.
    /// @param code Port code that used for create SafeXAccount.
    /// @param toChainId Target chain id.
    /// @param params Port params correspond with the port.
    /// @param recovery The default safe recovery module address on target chain for SafeXAccount.
    function xCreate(bytes4 code, uint256 toChainId, bytes calldata params, address recovery) external payable;
    /// @dev Calculate SafeXAccount address on target chain.
    /// @notice The module address is only effective during its creation and may be replaced by the SafeXAccount in the future.
    /// @param fromChainId Chain id that SafeXAccount belongs in.
    /// @param toChainId Chain id that SafeXAccount lives in.
    /// @param deployer Owner that SafeXAccount belongs to.
    /// @return (SafeXAccount address, module address).
    function safeXAccountOf(uint256 fromChainId, uint256 toChainId, address deployer)
        external
        view
        returns (address, address);
}

/// @dev ISafeMsgportModule serves as a module integrated within the Safe system, specifically devised to enable remote administration and control of the safeXAccount.
interface ISafeMsgportModule {
    /// @dev Receive xCall from root chain xOwner.
    /// @param target Target of the transaction that should be executed
    /// @param value Wei value of the transaction that should be executed
    /// @param data Data of the transaction that should be executed
    /// @param operation Operation (Call or Delegatecall) of the transaction that should be executed
    /// @return xExecute return data Return data after xCall.
    function xExecute(address target, uint256 value, bytes calldata data, uint8 operation)
        external
        payable
        returns (bytes memory);
}

/// @dev IPortRegistry functions as a comprehensive registry for all chain message ports.
interface IPortRegistry {
    /// @dev Fetch port address by chainId and port code.
    function get(uint256 chainId, bytes4 code) external view returns (address);
}

/// @dev IMessagePort serves as a universal interface facilitating the transmission of cross-chain messages across all msgport channels.
interface IMessagePort {
    /// @dev Send a cross-chain message over the MessagePort.
    /// @notice Send a cross-chain message over the MessagePort.
    /// @param toChainId The message destination chain id. <https://eips.ethereum.org/EIPS/eip-155>
    /// @param toDapp The user application contract address which receive the message.
    /// @param message The calldata which encoded by ABI Encoding.
    /// @param params Extend parameters to adapt to different message protocols.
    function send(uint256 toChainId, address toDapp, bytes calldata message, bytes calldata params) external payable;
}

/// @dev SafeXAccountDemo is a demonstration showcasing the utilization of SafeXAccount to execute an xCall.
contract ExampleSafeXAccount {
    // SafeXAccountFactory address
    address public factory;
    // PortRegistry address
    address public registry;

    constructor(address factory_, address registry_) {
        factory = factory_;
        registry = registry_;
    }

    /// @dev The function is utilized to create a SafeXAccount on the target chain.
    function createXAccountOnTargetChain(bytes4 code, uint256 toChainId, bytes calldata params, address recovery)
        public
        payable
    {
        ISafeXAccountFactory(factory).xCreate{value: msg.value}(code, toChainId, params, recovery);
    }

    /// @dev The function facilitates the execution of an xCall across a SafeXAccount.
    function crossChainCall(
        bytes4 code,
        uint256 toChainId,
        bytes calldata params,
        address target,
        uint256 value,
        bytes calldata data,
        uint8 operation
    ) public payable {
        bytes memory message =
            abi.encodeWithSelector(ISafeMsgportModule.xExecute.selector, target, value, data, operation);
        address port = IPortRegistry(registry).get(toChainId, code);
        (, address module) = ISafeXAccountFactory(factory).safeXAccountOf(block.chainid, toChainId, address(this));
        IMessagePort(port).send{value: msg.value}(toChainId, module, message, params);
    }
}`,
    link: "https://docs.darwinia.network/cross-chain-abstract-account-a0aae327c3d54555818fdab1149d0608",
    description:
      "xAccount is a component within Darwinia Msgport, xAccount simplifies the user experience in executing cross-chain operations.",
    language: "solidity",
  },
  {
    title: "Asset Bridge",
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
interface ILnDefaultBridgeSource {
    function transferAndLockMargin(
        Snapshot calldata _snapshot,
        uint112 _amount,
        address _receiver
    ) external;
    function requestSlashAndRemoteRelease(
        LnBridgeHelper.TransferParameter calldata _params,
        uint256 _remoteChainId,
        bytes32 _expectedTransferId,
        bytes memory _extParams
    ) external;
    function requestWithdrawMargin(
        uint256 _remoteChainId,
        address _sourceToken,
        address _targetToken,
        uint112 _amount,
        bytes memory _extParams
    ) external;
}
interface ILnDefaultBridgeTarget {
    function transferAndReleaseMargin(
        LnBridgeHelper.TransferParameter calldata _params,
        uint256 _remoteChainId,
        bytes32 _expectedTransferId
    ) external;
    function withdraw(
        uint256 _remoteChainId,
        bytes32 _lastTransferId,
        uint64  _withdrawNonce,
        address _provider,
        address _sourceToken,
        address _targetToken,
        uint112 _amount
    ) external;
    function slash(
        LnBridgeHelper.TransferParameter memory _params,
        uint256 _remoteChainId,
        address _slasher,
        uint112 _fee,
        uint112 _penalty
    ) external;
}
contract MsglineMessager is Application, AccessController {
    IMessageLine public immutable msgline;
    struct RemoteMessager {
        uint256 msglineRemoteChainId;
        address messager;
    }
    mapping(address=>bool) public whiteList;
    // app remoteChainId => msgline remote messager
    mapping(uint256=>RemoteMessager) public remoteMessagers;
    // token bridge pair
    // hash(msglineRemoteChainId, localAppAddress) => remoteAppAddress
    mapping(bytes32=>address) public remoteAppReceivers;
    mapping(bytes32=>address) public remoteAppSenders;
    event CallerUnMatched(uint256 srcAppChainId, address srcAppAddress);
    event CallResult(uint256 srcAppChainId, bool result);
    modifier onlyWhiteList() {
        require(whiteList[msg.sender], "msg.sender not in whitelist");
        _;
    }
    modifier onlyMsgline() {
        require(msg.sender == address(msgline), "invalid caller");
        _;
    }
    constructor(address _dao, address _msgline) {
        _initialize(_dao);
        msgline = IMessageLine(_msgline);
    }
    function setRemoteMessager(uint256 _appRemoteChainId, uint256 _msglineRemoteChainId, address _remoteMessager) onlyDao external {
        remoteMessagers[_appRemoteChainId] = RemoteMessager(_msglineRemoteChainId, _remoteMessager);
    }
    function setWhiteList(address _caller, bool _enable) external onlyDao {
        whiteList[_caller] = _enable;
    }
    function registerRemoteReceiver(uint256 _remoteChainId, address _remoteBridge) onlyWhiteList external {
        RemoteMessager memory remoteMessager = remoteMessagers[_remoteChainId];
        require(remoteMessager.messager != address(0), "remote not configured");
        bytes32 key = keccak256(abi.encodePacked(remoteMessager.msglineRemoteChainId, msg.sender));
        remoteAppReceivers[key] = _remoteBridge;
    }
    function registerRemoteSender(uint256 _remoteChainId, address _remoteBridge) onlyWhiteList external {
        RemoteMessager memory remoteMessager = remoteMessagers[_remoteChainId];
        require(remoteMessager.messager != address(0), "remote not configured");
        bytes32 key = keccak256(abi.encodePacked(remoteMessager.msglineRemoteChainId, msg.sender));
        remoteAppSenders[key] = _remoteBridge;
    }
    function sendMessage(uint256 _remoteChainId, bytes memory _message, bytes memory _params) onlyWhiteList external payable {
        RemoteMessager memory remoteMessager = remoteMessagers[_remoteChainId];
        require(remoteMessager.messager != address(0), "remote not configured");
        bytes32 key = keccak256(abi.encodePacked(remoteMessager.msglineRemoteChainId, msg.sender));
        address remoteAppAddress = remoteAppReceivers[key];
        require(remoteAppAddress != address(0), "app pair not registered");
        bytes memory msglinePayload = messagePayload(msg.sender, remoteAppAddress, _message);
        msgline.send{ value: msg.value }(
            remoteMessager.msglineRemoteChainId,
            remoteMessager.messager,
            msglinePayload,
            _params
        );
    }
    function receiveMessage(uint256 _srcAppChainId, address _remoteAppAddress, address _localAppAddress, bytes memory _message) onlyMsgline external {
        uint256 srcChainId = _fromChainId();
        RemoteMessager memory remoteMessager = remoteMessagers[_srcAppChainId];
        require(srcChainId == remoteMessager.msglineRemoteChainId, "invalid remote chainid");
        require(remoteMessager.messager == _xmsgSender(), "invalid remote messager");
        bytes32 key = keccak256(abi.encodePacked(srcChainId, _localAppAddress));
        // check remote appSender
        if (_remoteAppAddress != remoteAppSenders[key]) {
            emit CallerUnMatched(_srcAppChainId, _remoteAppAddress);
            return;
        }
        (bool success,) = _localAppAddress.call(_message);
        // don't revert to prevent message block
        emit CallResult(_srcAppChainId, success);
    }
    function messagePayload(address _from, address _to, bytes memory _message) public view returns(bytes memory) {
        return abi.encodeWithSelector(
            MsglineMessager.receiveMessage.selector,
            block.chainid,
            _from,
            _to,
            _message
        );
    }
}`,
    link: "https://docs.darwinia.network/tokenasset-bridge-c2b42b6e0c3348ddb91333a4f24ac4d9",
    description:
      "By utilizing Darwinia Msgport, DApp developers can facilitate efficient cross-chain transfer and management of assets, streamlining the process of moving assets between different blockchain networks.",
    language: "solidity",
  },
];
