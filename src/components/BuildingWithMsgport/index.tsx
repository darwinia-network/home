import { testCode } from "../../data/code/test";
import BuildingWithMsgportMobile from "./BuildingWithMsgportMobile";
import BuildingWithMsgportPC from "./BuildingWithMsgportPC";

const data = [
  {
    title: "Prepare to Receive Messages",
    description: "Create a workspace for the contract that needs to be deployed on the target chain.",
    code: testCode,
  },
  {
    title: "Deploy MyReceiverDapp",
    description: "Create a workspace for the contract that needs to be deployed on the target chain.",
    code: testCode,
  },
  {
    title: "Get Calldata",
    description: "Create a workspace for the contract that needs to be deployed on the target chain.",
    code: testCode,
  },
  {
    title: "Get Fee and Messaging Params",
    description: "Create a workspace for the contract that needs to be deployed on the target chain.",
    code: testCode,
  },
  {
    title: "Sending Message",
    description: "Create a workspace for the contract that needs to be deployed on the target chain.",
    code: testCode,
  },
];

export default function BuildingWithMsgport() {
  return (
    <>
      <BuildingWithMsgportMobile title={["Start building with", "Darwinia Msgport"]} menu={data} link="#" />
      <BuildingWithMsgportPC title={["Start building with", "Darwinia Msgport"]} menu={data} link="#" />
    </>
  );
}
