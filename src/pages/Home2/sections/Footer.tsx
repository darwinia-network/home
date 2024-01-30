import Copyright from "../../../components/Copyright";
import FooterSections from "../../../components/FooterSections";
import FooterSocialMedia from "../../../components/FooterSocialMedia";
import SubscribeSection from "../../../components/SubscribeSection";
import useApp from "../../../hooks/useApp";

export function FooterPC() {
  const { isDesktopHeight } = useApp();
  return (
    <div
      className={`bg-cover flex flex-col justify-center px-[7.5rem] shrink-0 w-[75rem] h-full ${
        isDesktopHeight ? "gap-[6.25rem]" : "gap-[2.5rem]"
      }`}
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
