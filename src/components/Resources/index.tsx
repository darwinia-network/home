import Card from "./Card";

const resources: { icon: string; title: string; description: string; detail: { link: string } }[] = [
  {
    icon: "/images/resources/darwinia-msgport-gitHub.png",
    title: "Darwinia Msgport GitHub",
    description:
      "An open-source repo providing interfaces and tools for blockchain interoperability and communication.",
    detail: { link: "https://github.com/darwinia-network/darwinia-msgport" },
  },
  {
    icon: "/images/resources/darwinia-messages-explorer.png",
    title: "Darwinia Messages Explorer",
    description:
      "It serves as a comprehensive platform for following transactions over the Darwinia Msgport, helping users and developers to manage and analyze cross-chain data more effectively.",
    detail: { link: "https://msgscan.darwinia.network/" },
  },
  {
    icon: "/images/resources/technical-docs.png",
    title: "Technical Docs",
    description: "Start building your Cross-Chain DApp with Darwinia Msgport.",
    detail: { link: "https://docs.darwinia.network/msgport/overview/" },
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