import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { asyncComponent } from "./components/AsyncComponent";
import { createBrowserHistory } from "history";
const AsyncHome = asyncComponent(import("./page/Home"));
const AsyncFaq = asyncComponent(import("./page/Faq"));
const AsyncNotFound = asyncComponent(import("./page/NotFound"));
const AsyncBrand = asyncComponent(import("./page/Brand"));
const AsyncAmbassador = asyncComponent(import("./page/Ambassador"));
const AsyncCommunity = asyncComponent(import("./page/Community"));
const AsyncMedia = asyncComponent(import("./page/Media"));
const AsyncNews = asyncComponent(import("./page/News"));
const AsyncEvents = asyncComponent(import("./page/Events"));
const AsyncReports = asyncComponent(import("./page/Reports"));
const AsyncVideos = asyncComponent(import("./page/Videos"));
const AsyncTech = asyncComponent(import("./page/Tech"));
const AsyncModel = asyncComponent(import("./page/EcoModel"));
const history = createBrowserHistory();

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact component={AsyncHome} path="/" />
      <Route exact component={AsyncFaq} path="/faq" />

      <Route exact component={AsyncBrand} path="/brand" />

      <Route exact component={AsyncAmbassador} path="/ambassador" />

      <Route exact component={AsyncCommunity} path="/community" />

      <Route exact component={AsyncMedia} path="/media" />

      <Route exact component={AsyncReports} path="/reports" />

      <Route exact component={AsyncEvents} path="/events" />

      <Route exact component={AsyncVideos} path="/videos" />

      <Route exact component={AsyncNews} path="/news" />

      <Route exact component={AsyncTech} path="/tech" />

      <Route exact component={AsyncModel} path="/economic_model" />

      <Route component={AsyncNotFound} />
    </Switch>
  </Router>
);
