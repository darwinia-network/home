export const sendMessage = `function remoteRemark() public payable {
    // 1. Prepare the call with its weight that will be executed on the target chain
    (bytes memory call, uint64 weight) = DarwiniaCalls.system_remarkWithEvent(hex"12345678");

    // 2. Construct the message payload
    MessagePayload memory payload = MessagePayload(
        1210, // spec version of target chain
        weight, // call weight
        call // call encoded bytes
    );

    // 3. Send the message payload
    bytes4 laneId = 0;
    uint64 messageNonce = sendMessage(toDarwinia, laneId, payload);
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
