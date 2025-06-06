// File path__
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Layouts/Components/Error/ErrorPage";
import SignIn from "../Layouts/Pages/Authentication/SignIn/SignIn";
import SignUp from "../Layouts/Pages/Authentication/SignUp/SignUp";
import HomePageLayout from "../Layouts/Pages/Home/HomePageLayout/HomePageLayout";

// Package__
import { createBrowserRouter } from "react-router";
import CreateAssign from "../Layouts/Pages/CreateAssign/CreateAssign";

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
      {
        path: "/create-assignments",
        element: <CreateAssign></CreateAssign>,
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;