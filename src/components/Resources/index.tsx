import { TFunction, useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function Resources() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-12">
      <h3 className="title uppercase text-2xl lg:text-5xl lg:leading-[4rem] text-white font-bold">{t("Resources")}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {getResourcesConfig(t).map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

interface LinkCfg {
  path: string;
  text: string;
  external: boolean;
}

interface ItemCfg {
  title: string;
  description: string;
  link: LinkCfg;
}

const getResourcesConfig = (t: TFunction): ItemCfg[] => [
  {
    title: t("Technical Docs"),
    link: {
      text: t("Learn more"),
      path: "https://docs.darwinia.network/",
      external: true,
    },
    description: t("Start building on Darwinia Chain."),
  },
  {
    title: t("Staking Rewards"),
    link: {
      text: t("Learn more"),
      path: "https://www.notion.so/Staking-56cd5e14439b4c9789f1cf63edd1d9d7",
      external: true,
    },
    description: t("Stake your RING/KTON to become a delegator or collator on Darwinia Chain."),
  },
  {
    title: t("Ecosystem Dapps"),
    link: {
      text: t("Learn more"),
      path: "https://apps.darwinia.network/",
      external: true,
    },
    description: t("Explore Dapps building on Darwinia ecosystem."),
  },
  {
    title: t("Faucet"),
    link: {
      text: t("Learn more"),
      path: "https://docs.darwinia.network/testnet-faucets-98a5b8e69c7e40b59973aa36af2ac647",
      external: true,
    },
    description: t("Get Test Tokens To experiment on TestNet."),
  },
];

const Item = ({ link, title, description }: ItemCfg) => (
  <div className="lg:flex-wrap flex flex-col justify-between border border-white p-medium h-52 lg:h-64">
    <div className="flex flex-col">
      <div className="title font-bold capitalize text-xl text-black bg-white px-medium">{title}</div>
      <span className="text capitalize text-gray font-light text-sm leading-6 mt-medium">{description}</span>
    </div>
    <SmartLink {...link} />
  </div>
);

const SmartLink = ({ path, text, external }: LinkCfg) =>
  external ? (
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="text text-white capitalize text-sm leading-6 font-light hover:opacity-70 select-none"
    >
      {text}
      {" >"}
    </a>
  ) : (
    <NavLink to={path} className="text text-white capitalize text-sm leading-6 font-light hover:opacity-70 select-none">
      {text}
      {" >"}
    </NavLink>
  );
