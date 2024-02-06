import Copyright from "../../components/Copyright";
import FooterLinks from "../../components/FooterLinks";
import { FooterSocialMedia } from "../../components/SocialMedia";
import SubscribeWrap from "../SubscribeWrap";
import { useApp } from "../../hooks/useApp";

export function HomePageDesktopFooter() {
  const { isDesktopHeight } = useApp();
  return (
    <div
      className={`bg-cover flex flex-col justify-center px-[7.5rem] shrink-0 w-[75rem] h-full ${
        isDesktopHeight ? "gap-[6.25rem]" : "gap-[2.5rem]"
      }`}
      style={{ backgroundImage: "url(/images/footer-bg.png)" }}
    >
      <SubscribeWrap isHomePage />
      <div className="flex justify-between">
        <FooterLinks />
      </div>
      <div className="flex items-center justify-between">
        <Copyright />
        <FooterSocialMedia />
      </div>
    </div>
  );
}
