export const title: string[] = ["Start building with", "RingDAO Msgport"];

export const link: string = "https://github.com/ringecosystem/msgport-examples"; // External link

export const menu: { title: string; description: string; code: string; language: "solidity" | "javascript" }[] = [
  {
    title: "Msgport Interface",
    description:
      "This interface provides developers with a generic message passing interface to send arbitrary data between contracts on different blockchain networks.",
    code: `// This file is part of Darwinia.
// Copyright (C) 2018-2023 Darwinia Network
// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

interface IMessagePort {
    error MessageFailure(bytes errorData);

    /// @dev Send a cross-chain message over the MessagePort.
    /// @notice Send a cross-chain message over the MessagePort.
    /// @param toChainId The message destination chain id. <https://eips.ethereum.org/EIPS/eip-155>
    /// @param toDapp The user application contract address which receive the message.
    /// @param message The calldata which encoded by ABI Encoding.
    /// @param params Extend parameters to adapt to different message protocols.
    function send(uint256 toChainId, address toDapp, bytes calldata message, bytes calldata params) external payable;

    /// @notice Get a quote in source native gas, for the amount that send() requires to pay for message delivery.
    ///         It should be noted that not all ports will implement this interface.
    /// @dev If the messaging protocol does not support on-chain fetch fee, then revert with "Unimplemented!".
    /// @param toChainId The message destination chain id. <https://eips.ethereum.org/EIPS/eip-155>
    /// @param toDapp The user application contract address which receive the message.
    /// @param message The calldata which encoded by ABI Encoding.
    /// @param params Extend parameters to adapt to different message protocols.
    function fee(uint256 toChainId, address toDapp, bytes calldata message, bytes calldata params)
        external
        view
        returns (uint256);
}`,
    language: "solidity",
  },
  {
    title: "Deploy ExampleReceiverDapp",
    description: "Deploy a receiver contract on the target chain to receive messages. (for example purposes only)",
    code: `// This file is part of Darwinia.
// Copyright (C) 2018-2023 Darwinia Network
// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.17;

import "https://github.com/darwinia-network/darwinia-msgport/blob/main/src/user/Application.sol";

contract ExampleReceiverDapp is Application {
    event DappMessageRecv(uint256 fromChainId, address fromDapp, address localPort, bytes message);

    // local port address
    address public immutable PORT;
    // remote dapp address
    address public immutable DAPP;

    constructor(address port, address dapp) {
        PORT = port;
        DAPP = dapp;
    }

    /// @notice You could check the fromDapp address or messagePort address.
    function testReceive(bytes calldata message) external {
        uint256 fromChainId = _fromChainId();
        address fromDapp = _xmsgSender();
        address localPort = _msgPort();
        require(localPort == PORT);
        require(fromDapp == DAPP);
        emit DappMessageRecv(fromChainId, fromDapp, localPort, message);
    }
}`,
    language: "solidity",
  },
  {
    title: "Encode calldata",
    description: "Build the remote call data as the message payload.",
    code: `import { ethers } from 'ethers';

const privateKey = process.env.PRIVATE_KEY;
const providerUrl = <Your RPC provider URL>;
const receiverDappAddr = <Your ExampleReceiverDapp Address>;

function encodeReceiveCall() {
    const receiverABI = [{
        "inputs": [
            {
                "internalType": "bytes",
                "name": "message",
                "type": "bytes"
            }
        ],
        "name": "testReceive",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }];
    const testMessage = "0x1234";
    const provider = new ethers.JsonRpcProvider(providerUrl);
    const signer = new ethers.Wallet(privateKey, provider);
    const receiverDapp = new ethers.Contract(receiverDappAddr, receiverABI, signer);
    const callData = receiverDapp.interface.encodeFunctionData('testReceive', [testMessage]);
    console.log(callData);
}

encodeReceiveCall();`,
    language: "javascript",
  },
  {
    title: "Get fee and params from Msgport API",
    description: "Estimate fee and get adaptation params from Msgport API.",
    code: `import axios from 'axios';

async function getFeeParams() {
    const requestBody = {
        'from_chain_id': <SourceChainID>,
        'to_chain_id': <TargetChainID>,
        'payload': <EncodeCallData>,
        'from_address': <SenderAddress>,
        'to_address': <ReceiverAddress>,
        'refund_address': <RefundAddress>,
    };
    const result = await axios.get("https://msgport-api.darwinia.network/ormp/fee", { params: requestBody });
    const { fee, params } = result.data.data;
    console.log(fee, params);
}

await getFeeParams();`,
    language: "javascript",
  },
  {
    title: "Sending message",
    description: "",
    code: `// This file is part of Darwinia.
// Copyright (C) 2018-2023 Darwinia Network
// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.17;

import "https://github.com/darwinia-network/darwinia-msgport/blob/main/src/interfaces/IMessagePort.sol";

contract ExampleSenderDapp {
    event DappMessageSent(address localPort, bytes message);

    // local port address
    address public immutable PORT;

    constructor(address port) {
        PORT = port;
    }

    function testSend(uint256 toChainId, address toDapp, bytes calldata message, bytes calldata params) external payable{
        IMessagePort(PORT).send{value: msg.value}(toChainId, toDapp, message, params);
        emit DappMessageSent(PORT, message);
    }
}`,
    language: "solidity",
  },
];
