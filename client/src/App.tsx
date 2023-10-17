import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";

export default function App() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        {routes}
      </Route>
    </Routes>
  );
}
