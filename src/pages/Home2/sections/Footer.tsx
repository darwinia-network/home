import Copyright from "../../../components/Copyright";
import FooterSections from "../../../components/FooterSections";
import FooterSocialMedia from "../../../components/FooterSocialMedia";
import SubscribeSection from "../../../components/SubscribeSection";

export function FooterPC() {
  return (
    <div
      className="bg-cover flex flex-col justify-center gap-[6.25rem] px-[7.5rem] shrink-0 w-[75rem] h-full"
      style={{ backgroundImage: "url(/images/footer-bg.png)" }}
    >
      <SubscribeSection />
      <FooterSections />
      <div className="flex items-center justify-between">
        <Copyright />
        <FooterSocialMedia />
      </div>
    </div>
  );
}
