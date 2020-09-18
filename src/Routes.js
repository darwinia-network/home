import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import {asyncComponent} from "./components/AsyncComponent";
import { createBrowserHistory} from "history";
const AsyncHome = asyncComponent(import("./page/Home"));
const AsyncFaq = asyncComponent(import("./page/Faq"));
const AsyncNews = asyncComponent(import("./page/News"));
const AsyncNotFound = asyncComponent(import("./page/NotFound"));
const AsyncBrand = asyncComponent(import("./page/Brand"));
const AsyncAmbassador = asyncComponent(import("./page/Ambassador"));
const AsyncCommunity = asyncComponent(import("./page/Community"));

const history = createBrowserHistory();


export default () =>
    <Router history={history}>
        <Switch>
            <Route
                exact
                component={AsyncHome}
                path='/'
            />
            <Route
                exact
                component={AsyncFaq}
                path='/faq'
            />

            <Route
                exact
                component={AsyncNews}
                path='/news'
            />

            <Route
                exact
                component={AsyncBrand}
                path='/brand'
            />

            <Route
                exact
                component={AsyncAmbassador}
                path='/ambassador'
            />

            <Route
                exact
                component={AsyncCommunity}
                path='/community'
            />

            <Route component={AsyncNotFound}/>
        </Switch>
    </Router>
