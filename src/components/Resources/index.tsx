import Card from "./Card";

const resources: { icon: string; title: string; description: string; detail: { link: string } }[] = [
  {
    icon: "/images/resources/darwinia-msgport-gitHub.png",
    title: "GitHub",
    description:
      "Powering Your DApp’s Cross-Chain Capabilities",
    detail: { link: "https://github.com/darwinia-network/darwinia" },
  },
  {
    icon: "/images/resources/darwinia-messages-explorer.png",
    title: "Explorer",
    description:
      "Chain Explorer provided by Subscan",
    detail: { link: "https://darwinia.subscan.io" },
  },
  {
    icon: "/images/resources/technical-docs.png",
    title: "Build Docs",
    description: "Start building your Cross-Chain DApp on Darwinia.",
    detail: { link: "https://docs.darwinia.network/build/smart-contract/interact-with-web3js/" },
  },
  {
    icon: "/images/resources/developer-assistance.png",
    title: "Developer Assistance",
    description:
      "Chat with other developers in the Developer Community, share your ideas and get answers to your technical questions.",
    detail: { link: "https://discord.com/invite/fZDWmJKWCw" },
  },
];

export default function Resources() {
  return (
    <div className="flex flex-col gap-10 lg:gap-[34px]">
      <h2 className="text-h2 text-black lg:text-[3.125rem] lg:font-bold lg:tracking-[0.125rem] lg:leading-normal" data-aos="fade-up">
        Resources
      </h2>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-[88px]">
        {resources.map(({ icon, title, description, detail }) => (
          <Card key={title} icon={icon} title={title} description={description} detail={detail} />
        ))}
      </div>
    </div>
  );
}