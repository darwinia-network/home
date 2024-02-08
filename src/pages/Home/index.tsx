import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useApp } from "../../hooks/useApp";

export default function Home() {
  const { isDesktopWidth } = useApp();
  return isDesktopWidth ? <Desktop /> : <Mobile />;
}
