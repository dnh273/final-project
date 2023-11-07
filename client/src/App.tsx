import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import AppRoutes from "./routes";
import ErrorPage from "./components/common/ErrorPage";

export default function App() {
  return (
    <ErrorBoundary
      fallback={
        <ErrorPage
          title="Internal Server"
          description="Something went wrong! Please try again"
        />
      }
    >
      <AppRoutes />;
    </ErrorBoundary>
  );
}
