import React, { Suspense } from "react";
import appRoutes from "./appRoutes";
import LoadingPage from "../components/common/LoadingPage";
import ErrorPage from "../components/common/ErrorPage";
const MainLayout = React.lazy(() => import("../components/layout/MainLayout"));

export const protectedRoutes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <MainLayout />
      </Suspense>
    ),
    children: appRoutes,
  },
  {
    path: "*",
    element: <ErrorPage status={404} title="Not found page" />,
  },
];
