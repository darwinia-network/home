import Copyright from "../Copyright";
import { FooterSocialMedia } from "../SocialMedia";

export default function MobileFooter() {
  return (
    <div className="py-[1.25rem] flex flex-col gap-[1.25rem] items-center bg-app-black">
      <FooterSocialMedia />
      <Copyright />
    </div>
  );
}
