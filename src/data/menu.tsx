import { TFunction, useTranslation } from "react-i18next";
import { Menu } from "./types";

/* make sure you use a custom hook here since we have to use the useTranslation hook
 * from react-i18next */
export const useMenuData = () => {
  const { t } = useTranslation();
  const menu = getMenu(t);
  return {
    menu,
  };
};

const getMenu = (_t: TFunction): Menu[] => {
  return [
    {
      title: "Use Darwinia ▾",
      navigations: [
        {
          label: "Get RING",
          path: "https://darwinia.notion.site/Where-can-I-get-the-RING-token-c0932eaa99454be99335fdfff106e789",
          external: true,
        },
        {
          label: "Stake RING",
          path: "https://docs.darwinia.network/staking-guide-4306a2a3f25f4ea0b41377e267e1d319",
          external: true,
        },
        {
          label: "Run a Node",
          path: "https://docs.darwinia.network/run-collator-node-af6bce360d5b49ddacc56e4587510210",
          external: true,
        },
        // { label: "Cross-Chain Asset Bridge" },
        // { label: "Cross-Chain DAO Governance" },
      ],
    },
    {
      title: "Learn ▾",
      navigations: [
        { label: "What is Darwinia", path: "https://docs.darwinia.network/", external: true },
        {
          label: "What is RING",
          path: "https://docs.darwinia.network/token-and-economic-model-ebfbf88c76794215a4abe75ae13f596b",
          external: true,
        },
        { label: "Darwinia Ecosystem DApps", path: "https://apps.darwinia.network/", external: true },
        { label: "Darwinia News & Updates", path: "https://medium.com/darwinianetwork", external: true },
        {
          label: "Darwinia Roadmap",
          path: "https://www.notion.so/darwinia/c700133dd5a04c2494ceab489c75c907?v=8ff88199019d4236a3b9a190f5e7b9d5",
          external: true,
        },
        { label: "Darwinia Genepaper", path: "https://darwinia.network/#/papers/1" },
        { label: "Glossary", path: "https://docs.darwinia.network/glossary-8967fc4aa6a046a69b525dff7bf70a50" },
        { label: "FAQ", path: "https://www.notion.so/darwinia/FAQ-c9412ead803542f197ba1ccafb72c427", external: true },
      ],
    },
    {
      title: "Developers ▾",
      navigations: [{ label: "Documentation", path: "https://docs.darwinia.network/", external: true }],
    },
    {
      title: "Solutions ▾",
      navigations: [
        {
          label: "Darwinia EVM + XCMP",
          path: "https://docs.darwinia.network/darwinia-chains-df814f681ec248438cb762df8aaddbd6",
          external: true,
        },
        {
          label: "Darwinia Msgport",
          path: "https://docs.darwinia.network/darwinia-msgport-fa89f501ea1747e285b6169697e2ff77",
          external: true,
        },
      ],
    },
    {
      title: "Community ▾",
      navigations: [
        {
          label: "Online Communities",
          path: "https://www.notion.so/darwinia/Online-communities-fe79f25c50e7412189fff9583c3df5d2",
          external: true,
        },
        {
          label: "Get Involved",
          path: "https://www.notion.so/darwinia/Get-involved-664339c01069475da197718e8003544c",
          external: true,
        },
        {
          label: "Grants",
          path: "https://github.com/darwinia-network/collaboration/blob/master/grant/README.md",
          external: true,
        },
        {
          label: "help Center",
          path: "https://www.notion.so/darwinia/a76d5bdc7ad242bea991c023dfca208f?v=5fb127fc9a7a4d67a3bbc3ed50445180",
          external: true,
        },
        {
          label: "Brand Assets",
          path: "https://darwinia.notion.site/Brand-Assets-9bd35f88f0674232954737577616f2c2",
          external: true,
        },
      ],
    },
  ];
};
