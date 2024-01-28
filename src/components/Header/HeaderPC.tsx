import { Link } from "react-router-dom";
import NavigationV2 from "../NavigationV2";

const medias = [
  { icon: "/images/social-media/x-black-bg.svg", link: "#" },
  { icon: "/images/social-media/discord-black-bg.svg", link: "#" },
];

export default function HeaderPC() {
  return (
    <div className="fixed top-5 left-5 z-40 py-[1.25rem] pl-[1.25rem] pr-[2.5rem] rounded-[31.25rem] transition-colors bg-app-white/60 hover:bg-app-white lg:flex hidden items-center gap-[2.5rem] shrink-0">
      <Link to="/" className="shrink-0">
        <img
          width={74}
          height={74}
          alt="Darwinia Logo"
          src="/images/darwinia-logo-black-background-round.svg"
          className="w-[4.625rem] h-[4.625rem] shrink-0"
        />
      </Link>
      <NavigationV2 />
      {medias.map((media, index) => (
        <a
          key={index}
          rel="noopener noreferrer"
          target="_blank"
          href={media.link}
          className="shrink-0 transition-transform hover:scale-105 active:scale-95"
        >
          <img width={34} height={34} alt="" src={media.icon} className="shrink-0 w-[2.125rem] h-[2.125rem]" />
        </a>
      ))}
    </div>
  );
}
