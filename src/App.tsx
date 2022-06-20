import React, { useReducer } from "react";
import "./assets/styles/app.scss";
import Navigation from "./components/Navigation";
import Routes from "./routes";
import { accountReducer, accountInitialState, AccountContext } from "./store";

function App() {
  const [accountState, accountDispatch] = useReducer(accountReducer, accountInitialState);
  return (
    <>
      <AccountContext.Provider value={{ state: accountState, dispatch: accountDispatch }}>
        <Navigation />
        <Routes />
      </AccountContext.Provider>
    </>
  );
}

export default App;
