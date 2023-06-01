export const sendMessage = `// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

import "../xapps/CrabXApp.sol";
import "../calls/DarwiniaCalls.sol";
import "@darwinia/contracts-utils/contracts/Ownable.sol";
import "@darwinia/contracts-utils/contracts/AccountId.sol";

pragma experimental ABIEncoderV2;

// CrabSmartChain remote call remark of Darwinia
contract RemarkDemo is CrabXApp, Ownable {
    event OutputNonce(uint256 nonce);

    constructor() public {
        init();
    }

    function remoteRemark() public payable {
        // 1. Prepare the call with its weight that will be executed on the target chain
        (bytes memory call, uint64 weight) = DarwiniaCalls
            .system_remarkWithEvent(hex"hello world");

        // 2. Construct the message payload
        MessagePayload memory payload = MessagePayload(
            1210, // spec version of target chain
            weight, // call weight
            call // call encoded bytes
        );

        // 3. Send the message payload to the Darwinia Chain through a lane
        bytes4 laneId = 0;
        uint64 messageNonce = sendMessage(toDarwinia, laneId, payload);
        emit OutputNonce(messageNonce);
    }

    // If you want to update the configs, you can add the following function
    function setStorageAddress(address _storageAddress) public onlyOwner {
        storageAddress = _storageAddress;
    }

    function setDispatchAddress(address _dispatchAddress) public onlyOwner {
        dispatchAddress = _dispatchAddress;
    }

    function setRemoteSender(address _remoteSender)
        public
        onlyOwner
    {
        remoteSender = _remoteSender;
    }

    function setToDarwinia(BridgeConfig memory config) public onlyOwner {
        toDarwinia = config;
    }

    function setToCrabParachain(BridgeConfig memory config) public onlyOwner {
        toCrabParachain = config;
    }
}`;

export const remoteEVMCall = `PalletEthereum.MessageTransactCall memory call =
    PalletEthereum.MessageTransactCall(
        // the call index of message_transact
        0x2901,
        // the evm transaction
        PalletEthereum.buildTransactionV2ForMessageTransact(
            600000, // gas limit
            remoteAppContractAddress,
            abi.encodeWithSelector(
                IRemoteApp.add.selector,
                mappedToken,
            )
        )
    );`;

export const accessRestriction = `function add(uint256 _value) public {
    // the sender is only allowed to be called by the derived address
    // of dapp address on the source chain.
    require(
        derivedFromRemote(msg.sender),
        "msg.sender is not derived from remote"
    );
    number = number + _value;
}`;

export const msgportSend = `function send(
    address _throughLocalDock,
    uint64 _toChainId,
    address _toDappAddress,
    bytes memory _messagePayload,
    bytes memory _params
) external payable returns (uint256);`;

export const msgportRecv = `function recv(
    uint64 _fromChainId,
    address _fromDappAddress,
    address _toDappAddress,
    bytes memory _message
) external;`;
