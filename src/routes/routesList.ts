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
    path: "/papers",
    component: lazy(() => import("../pages/Papers")),
  },
  {
    path: "/paper/:paperId",
    component: lazy(() => import("../pages/Paper")),
  },
  {
    path: "/online-communities",
    component: lazy(() => import("../pages/OnlineCommunities")),
  },
  {
    path: "/get-involved",
    component: lazy(() => import("../pages/GetInvolved")),
  },
];

export default routesList;
