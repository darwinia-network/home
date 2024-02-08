import { PropsWithChildren, useMemo } from "react";
import { useApp } from "../hooks/useApp";
import OthersPageDesktopLayout from "../layouts/OthersPageDesktopLayout";
import MobileLayout from "../layouts/MobileLayout";

export default function OthersPageWrap({ children }: PropsWithChildren<unknown>) {
  const { isDesktopWidth } = useApp();
  const Layout = useMemo(() => (isDesktopWidth ? OthersPageDesktopLayout : MobileLayout), [isDesktopWidth]);
  return (
    <Layout>
      {/* Padding space for the header */}
      <div className="pt-[3.75rem] lg:pt-[6.25rem] bg-app-white">{children}</div>
    </Layout>
  );
}
