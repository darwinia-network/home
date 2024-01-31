import { useReducer } from "react";
import "./assets/styles/app.scss";
import Navigation from "./components/Navigation";
import Routes from "./routes";
import { accountReducer, accountInitialState, AccountContext } from "./store";
import ScrollToTop from "./components/ScrollToTop";
import { useLocation } from "react-router-dom";

function App() {
  const [accountState, accountDispatch] = useReducer(accountReducer, accountInitialState);
  const location = useLocation();

  return (
    <>
      <AccountContext.Provider value={{ state: accountState, dispatch: accountDispatch }}>
        {location.pathname !== "/" && <Navigation />}
        <ScrollToTop />
        <Routes />
      </AccountContext.Provider>
    </>
  );
}

export default App;
