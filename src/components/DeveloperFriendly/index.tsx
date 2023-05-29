import { useTranslation } from "react-i18next";
import logoMetamask from "../../assets/images/dapps/metamask.png";
import logoOpenZeppelin from "../../assets/images/dapps/open-zeppelin.png";
import logoTheGraph from "../../assets/images/dapps/the-graph.png";
import logoHardhat from "../../assets/images/dapps/hardhat.png";
import logoWaffle from "../../assets/images/dapps/waffle.png";
import logoRemix from "../../assets/images/dapps/remix.png";
import logoWeb3Py from "../../assets/images/dapps/web3-py.png";
import logoBwareLabs from "../../assets/images/dapps/bware-labs.png";

export default function DeveloperFriendly() {
  return (
    <div className="flex flex-col">
      <div>
        <Title />
      </div>
      <div className="mt-1">
        <SubTitle />
      </div>
      <div className="mt-7 lg:mt-10">
        <Dapps />
      </div>
    </div>
  );
}

const Title = () => {
  const { t } = useTranslation();

  return (
    <h3 className="title text-white uppercase font-bold text-2xl lg:text-5xl lg:leading-[4rem]">
      {t("Developer Friendly Design")}
    </h3>
  );
};

const SubTitle = () => {
  const { t } = useTranslation();
  return (
    <span className="text text-sm leading-6 text-gray capitalize">{t("easily to build, test and launch dapps.")}</span>
  );
};

const dapps: { logo: string }[] = [
  { logo: logoMetamask },
  { logo: logoOpenZeppelin },
  { logo: logoTheGraph },
  { logo: logoHardhat },
  { logo: logoWaffle },
  { logo: logoRemix },
  { logo: logoWeb3Py },
  { logo: logoBwareLabs },
];

const Dapps = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-2 lg:gap-10 lg:border lg:border-primary lg:p-10">
    {dapps.map(({ logo }, index) => (
      <div key={index} className="border border-primary flex items-center justify-center px-4 py-2 lg:transition-transform lg:hover:scale-105">
        <img alt="..." src={logo} />
      </div>
    ))}
  </div>
);
