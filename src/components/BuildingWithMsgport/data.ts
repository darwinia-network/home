import { testCode } from "../../data/code/test";

export const title: string[] = ["Start building with", "Darwinia Msgport"];

export const link: string = "https://docs.darwinia.network/simplest-messaging-demo-045164a7d4d7413ba4a5dd65214e59e6"; // External link

export const menu: { title: string; description: string; code: string }[] = [
  {
    title: "Prepare to Receive Messages",
    description: "Create a workspace for the contract that needs to be deployed on the target chain.",
    code: testCode,
  },
  {
    title: "Deploy MyReceiverDapp",
    description: "Deploy the contract on the target chain.",
    code: testCode,
  },
  {
    title: "Get Calldata",
    description: "Input the message and retrieve the calldata.",
    code: testCode,
  },
  {
    title: "Get Fee and Messaging Params",
    description: "Use the MsgPort API to obtain the cross-chain message fee and messaging service parameters.",
    code: testCode,
  },
  {
    title: "Sending Message",
    description: "Use the contract to send the message.",
    code: testCode,
  },
];
