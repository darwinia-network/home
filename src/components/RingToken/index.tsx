import { TFunction, useTranslation } from "react-i18next";
import ringIcon from "../../assets/images/ring.svg";
import feesIcon from "../../assets/images/ring/fees.svg";
import executionIcon from "../../assets/images/ring/execution.svg";
import stakingIcon from "../../assets/images/ring/staking.svg";
import governanceIcon from "../../assets/images/ring/governance.svg";

export default function RingToken() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-start justify-start">
      <Title />
      <div className="flex flex-col lg:flex-row lg:justify-between gap-12 mt-12 lg:mt-[4.5rem]">
        {getItemsConfig(t).map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="flex items-center">
      <img alt="..." src={ringIcon} className="w-10 h-10 lg:w-[3.8rem] lg:h-[3.8rem]" />
      <span className="uppercase title text-primary text-2xl lg:text-5xl lg:leading-[4rem]">&nbsp;ring&nbsp;</span>
      <span className="uppercase title text-white text-2xl lg:text-5xl lg:leading-[4rem]">token</span>
    </div>
  );
}

interface ItemCfg {
  title: string;
  icon: string;
  description: string;
}

const getItemsConfig = (t: TFunction): ItemCfg[] => [
  {
    title: t("Transaction Fees"),
    icon: feesIcon,
    description: t("All transaction fees are paid for with RING."),
  },
  {
    title: t("Smart Contract Execution"),
    icon: executionIcon,
    description: t("RING is used To pay for smart contract execution."),
  },
  {
    title: t("Staking "),
    icon: stakingIcon,
    description: t(
      "Stake RING & KTON (the derivative commitment token of RING, designed to encourage long-term involvement) and earn rewards."
    ),
  },
  {
    title: t("On-Chain Governance"),
    icon: governanceIcon,
    description: t("RING is used for facilitating the governance activities such as voting and referenda."),
  },
];

const Item = ({ title, icon, description }: ItemCfg) => (
  <div className="flex-1 flex flex-col items-start justify-start">
    <img alt="..." src={icon} />
    <h5 className="title text-white text-xl font-bold capitalize mt-5">{title}</h5>
    <div className="h-[1px] w-full bg-white/30 my-5" />
    <span className="text font-light text-sm leading-6 text-gray capitalize">{description}</span>
  </div>
);
