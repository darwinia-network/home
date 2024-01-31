import { testCode } from "../data/code/test";
import UseCase from "./UseCase";

const cases: { title: string; code: string; link: string; description: string }[] = [
  {
    title: "Governance",
    code: testCode,
    link: "https://docs.darwinia.network/multi-chain-dao-governance-d3b2e194828d4af8bad8e3fa28219fc3",
    description:
      "DApp developers can utilize Darwinia Msgport xAccount feature for cross-chain execution of governance decisions.",
  },
  {
    title: "Asset Bridge",
    code: testCode,
    link: "https://docs.darwinia.network/tokenasset-bridge-c2b42b6e0c3348ddb91333a4f24ac4d9",
    description:
      "By utilizing Darwinia Msgport, DApp developers can facilitate efficient cross-chain transfer and management of assets, streamlining the process of moving assets between different blockchain networks.",
  },
];

export default function UseCases() {
  return (
    <div className="flex flex-col gap-[3.75rem] lg:flex-row lg:gap-[10.25rem]">
      {cases.map(({ title, code, link, description }) => (
        <UseCase key={title} title={title} code={code} link={link} description={description} />
      ))}
    </div>
  );
}
