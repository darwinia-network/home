import { Route, Routes } from "react-router-dom";
import React, { LazyExoticComponent, Suspense } from "react";
import routesArray from "./routesList";

/* register routes here */
interface AppRoute {
  path: string;
  component: (() => JSX.Element) | LazyExoticComponent<() => JSX.Element>;
  children?: AppRoute[];
  isIndex?: boolean;
}
const routesList: AppRoute[] = routesArray;

const Index = () => {
  const RoutesJSX = createRoute(routesList);

  return <Routes>{RoutesJSX}</Routes>;
};

const createRoute = (routesList: AppRoute[], key: string | undefined = undefined): JSX.Element[] => {
  return routesList.map((route, index) => {
    const newKey = key ? `${key}-${index}` : `${index}`;
    const loadingScreen = createLoadingScreen();
    const Component = route.component;
    if (route.children) {
      const output = createRoute(route.children, `${index}`);
      return (
        <Route
          element={
            <Suspense fallback={loadingScreen}>
              <Component />
            </Suspense>
          }
          key={newKey}
          path={route.path}
        >
          {output}
        </Route>
      );
    } else {
      const props = route.isIndex ? { index: true } : { path: route.path };
      return (
        <Route
          key={newKey}
          element={
            <Suspense fallback={loadingScreen}>
              <Component />
            </Suspense>
          }
          {...props}
        />
      );
    }
  });
};

const createLoadingScreen = () => {
  return <div className={"text-white"}>Loading...</div>;
};

export default Index;
