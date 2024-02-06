import { PropsWithChildren } from "react";
import OthersPageDesktopFooter from "../components/Footer/OthersPageDesktopFooter";
import OthersPageDesktopHeader from "../components/Header/OthersPageDesktopHeader";

export default function OthersPageDesktopLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <OthersPageDesktopHeader />
      {children}
      <OthersPageDesktopFooter />
    </>
  );
}
