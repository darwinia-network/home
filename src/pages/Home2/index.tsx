import HomeV2Mobile from "./Home2Mobile";
import HomeV2PC from "./Home2PC";
import useApp from "../../hooks/useApp";
import AppProvider from "../../providers/AppProvider";

export default function HomeV2() {
  return (
    <AppProvider>
      <Page />
    </AppProvider>
  );
}

function Page() {
  const { isDesktopWidth } = useApp();
  return isDesktopWidth ? <HomeV2PC /> : <HomeV2Mobile />;
}
