import Copyright from "../Copyright";
import FooterLinks from "../FooterLinks";
import { FooterSocialMedia } from "../SocialMedia";
import SubscribeWrap from "../SubscribeWrap";

export default function OthersPageDesktopFooter() {
  return (
    <div className="bg-app-black py-[3.75rem]">
      <div className="max-w-8xl mx-auto px-medium flex justify-between">
        <FooterLinks />

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-[2.5rem]" data-aos="fade-up">
            <SubscribeWrap />
            <FooterSocialMedia />
          </div>
          <Copyright />
        </div>
      </div>
    </div>
  );
}
