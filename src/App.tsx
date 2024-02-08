import Routes from "./routes";
import ScrollToTop from "./components/ScrollToTop";
import AppProvider from "./providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <ScrollToTop />
      <Routes />
    </AppProvider>
  );
}

export default App;
