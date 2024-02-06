import Routes from "./routes";
import ScrollToTop from "./components/ScrollToTop";
import { useLocation } from "react-router-dom";
import NormalDesktopHeader from "./components/Header/NormalDesktopHeader";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/" && <NormalDesktopHeader />}
      <ScrollToTop />
      <Routes />
    </>
  );
}

export default App;
