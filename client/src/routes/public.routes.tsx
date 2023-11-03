import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import LoadingPage from "../components/common/LoadingPage";
const AuthRoutes = lazy(() => import("../pages/Auth/routes"));

export const publicRoutes = [
  {
    path: "/auth/*",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <AuthRoutes />
      </Suspense>
    ),
  },
  { path: "*", element: <Navigate to="/auth/login" /> },
];
