import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
const ForYou = lazy(() => import("./pages/ForYou"));
const Layout = lazy(() => import("./components/layout/Layout"));
const Home = lazy(() => import("./pages/Home"));

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <ErrorBoundary>
          <Layout />
        </ErrorBoundary>
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          </Suspense>
        ),
      },
      {
        path: "/for-you",
        element: (
          <Suspense>
            <ErrorBoundary>
              <ForYou />
            </ErrorBoundary>
          </Suspense>
        ),
      },
    ],
  },
]);

export default Router;
