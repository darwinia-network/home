import { PropsWithChildren } from "react";
import MobileHeader from "../components/Header/MobileHeader";
import MobileFooter from "../components/Footer/MobileFooter";

export default function MobileLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <MobileHeader />
      <main className="w-full overflow-x-hidden lg:hidden">
        {children}
        <MobileFooter />
      </main>
    </>
  );
}
