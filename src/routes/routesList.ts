import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import { lazy } from "react";

const routesList = [
  {
    path: "*",
    component: PageNotFound,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/developers",
    component: lazy(() => import("../pages/Developers")),
  },
  {
    path: "/tokens",
    component: lazy(() => import("../pages/Tokens")),
  },
  {
    path: "/community",
    component: lazy(() => import("../pages/Community")),
  },
  {
    path: "/about",
    component: lazy(() => import("../pages/About")),
  },
  {
    path: "/contact-us",
    component: lazy(() => import("../pages/Contact")),
    children: [
      {
        isIndex: true,
        path: "/",
        component: lazy(() => import("../pages/Contact/NestedChildOne")),
      },
      {
        path: "test2",
        component: lazy(() => import("../pages/Contact/NestedChildTwo")),
      },
    ],
  },
];

export default routesList;
