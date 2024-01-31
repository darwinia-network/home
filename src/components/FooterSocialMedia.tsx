const medias: { icon: string; link: string }[] = [
  { icon: "/images/social-media/x-white-bg.svg", link: "https://twitter.com/DarwiniaNetwork" },
  { icon: "/images/social-media/telegram-white-bg.svg", link: "https://t.me/DarwiniaNetwork" },
  { icon: "/images/social-media/discord-white-bg.svg", link: "https://discord.com/invite/aQdK9H4MZS" },
  { icon: "/images/social-media/github-white-bg.svg", link: "https://github.com/darwinia-network" },
  { icon: "/images/social-media/element-white-bg.svg", link: "https://app.element.io/#/room/#darwinia:matrix.org" },
  { icon: "/images/social-media/medium-white-bg.svg", link: "https://medium.com/darwinianetwork" },
  { icon: "/images/social-media/email-white-bg.svg", link: "mailto:hello@darwinia.network" },
];

export default function FooterSocialMedia() {
  return (
    <div className="flex items-center gap-5 lg:gap-medium">
      {medias.map(({ icon, link }, index) => (
        <a
          key={index}
          rel="noopener noreferrer"
          target="_blank"
          href={link}
          className="transition-transform lg:hover:-translate-y-1 lg:active:translate-y-0"
        >
          <img alt="..." width={24} height={24} src={icon} />
        </a>
      ))}
    </div>
  );
}
