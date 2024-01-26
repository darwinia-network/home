import { testCode } from "../data/code/test";
import UseCase from "./UseCase";

const cases: { title: string; code: string; link: string; description: string }[] = [
  {
    title: "Governance",
    code: testCode,
    link: "#",
    description:
      "DApp developers can utilize Darwinia Msgport xAccount feature for cross-chain execution of governance decisions.",
  },
  {
    title: "Asset Bridge",
    code: testCode,
    link: "#",
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
