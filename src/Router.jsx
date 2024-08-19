import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
const ForYou = lazy(() => import("./pages/ForYou"));
const Layout = lazy(() => import("./components/layout/Layout"));
const Home = lazy(() => import("./pages/Home"));

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <Home />{" "}
          </Suspense>
        ),
      },
      {
        path: "/for-you",
        element: (
          <Suspense>
            <ForYou />
          </Suspense>
        ),
      },
    ],
  },
]);

export default Router;
