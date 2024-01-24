const medias: { icon: string; link: string }[] = [
  { icon: "/images/social-media/x-white-bg.svg", link: "" },
  { icon: "/images/social-media/telegram-white-bg.svg", link: "" },
  { icon: "/images/social-media/discord-white-bg.svg", link: "" },
  { icon: "/images/social-media/github-white-bg.svg", link: "" },
  { icon: "/images/social-media/element-white-bg.svg", link: "" },
  { icon: "/images/social-media/medium-white-bg.svg", link: "" },
  { icon: "/images/social-media/email-white-bg.svg", link: "mailto:123@abc.com" },
];

export default function FooterSocialMedia() {
  return (
    <div className="flex items-center gap-5 lg:gap-medium">
      {medias.map(({ icon, link }, index) => (
        <a key={index} rel="noopener noreferrer" target="_blank" href={link}>
          <img alt="..." width={24} height={24} src={icon} />
        </a>
      ))}
    </div>
  );
}
