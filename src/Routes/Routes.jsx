// File path__
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Layouts/Components/Error/ErrorPage";
import HomePageLayout from "../Layouts/Pages/Home/HomePageLayout/HomePageLayout";

// Package__
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePageLayout></HomePageLayout>,
      },
    ],
  },
]);

export default router;
