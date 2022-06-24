import PageNotFound from "../pages/PageNotFound";
import { lazy } from "react";
import Demo from "../pages/Demo";

const routesList = [
  {
    path: "*",
    component: PageNotFound,
  },
  {
    path: "/not-found",
    component: PageNotFound,
  },
  {
    path: "/demo",
    component: Demo,
  },
  {
    path: "/",
    component: lazy(() => import("../pages/Home")),
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
    path: "/papers",
    component: lazy(() => import("../pages/Papers")),
  },
  {
    path: "/papers/:paperId",
    component: lazy(() => import("../pages/PaperSummary")),
  },
  /* {
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
  }, */
];

export default routesList;
