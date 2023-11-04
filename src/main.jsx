/* eslint-disable react-refresh/only-export-components */
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import("preline");
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./pages/error-page.jsx";

import DetailSkeleton from "./components/skeletons/detail-skeleton.jsx";
import HomeSkeleton from "./components/skeletons/home-skeleton.jsx";
import JeuxSkeleton from "./components/skeletons/jeux-skeleton.jsx";

const HomePage = lazy(() => import("./pages/home-page"));
const JeuxPage = lazy(() => import("./pages/jeux-page.jsx"));
const DetailPage = lazy(() => import("./pages/detail-page.jsx"));
const AproposPage = lazy(() => import("./pages/apropos-page.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense fallback={<HomeSkeleton />}>
            <HomePage />
          </React.Suspense>
        ),
      },
      {
        path: "/jeux",
        element: (
          <React.Suspense fallback={<JeuxSkeleton />}>
            <JeuxPage />
          </React.Suspense>
        ),
      },
      {
        path: "/jeux/:id",
        element: (
          <React.Suspense fallback={<DetailSkeleton />}>
            <DetailPage />
          </React.Suspense>
        ),
      },
      {
        path: "/apropos",
        element: (
          <React.Suspense fallback={<JeuxSkeleton />}>
            <AproposPage />
          </React.Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
