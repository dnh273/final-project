import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { Suspense, lazy } from "react";
import LoadingPage from "./components/common/LoadingPage";

const MainLayout = lazy(() => import("./components/layout/MainLayout"));

export default function App() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <Suspense fallback={<LoadingPage />}>
            <MainLayout />
          </Suspense>
        }
      >
        {routes}
      </Route>
    </Routes>
  );
}
