import Mobile from "./Mobile";
import Desktop from "./Desktop";
import useApp from "../../hooks/useApp";
import AppProvider from "../../providers/AppProvider";

export default function Home() {
  return (
    <AppProvider>
      <HomePage2 />
    </AppProvider>
  );
}

function HomePage2() {
  const { isDesktopWidth } = useApp();
  return isDesktopWidth ? <Desktop /> : <Mobile />;
}
