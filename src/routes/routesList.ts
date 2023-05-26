import PageNotFound from "../pages/PageNotFound";
import { lazy } from "react";

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
    path: "/",
    component: lazy(() => import("../pages/Home")),
  },
  {
    path: "/developers",
    component: lazy(() => import("../pages/Developers")),
  },
  {
    path: "/darwiniachain",
    component: lazy(() => import("../pages/DarwiniaChain")),
  },
  // {
  //   path: "/tokens",
  //   component: lazy(() => import("../pages/Tokens")),
  // },
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
