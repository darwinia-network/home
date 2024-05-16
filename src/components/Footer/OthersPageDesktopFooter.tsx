import Copyright from "../Copyright";
import FooterLinks from "../FooterLinks";
import { FooterSocialMedia } from "../SocialMedia";
import SubscribeWrap from "../SubscribeWrap";

export default function OthersPageDesktopFooter() {
  return (
    <div className="bg-app-black py-[3.75rem]">
      <div className="max-w-8xl mx-auto px-medium 2xl:flex justify-between lg:hidden ">
        <FooterLinks />

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-[2.5rem]">
            <SubscribeWrap />
            <FooterSocialMedia />
          </div>
          <Copyright />
        </div>
      </div>
      <div className="flex items-center justify-between px-[3.125rem] xl:px-[6.25rem] 2xl:hidden">
        <FooterLinks />
      </div>
      <div className="flex items-center justify-center mt-[7.5rem] 2xl:hidden">
        <SubscribeWrap />
      </div>
      <div className="flex items-center justify-between px-[3.125rem] xl:px-[6.25rem] mt-[5rem] 2xl:hidden">
        <FooterSocialMedia />
        <Copyright />
      </div>
    </div>
  );
}
