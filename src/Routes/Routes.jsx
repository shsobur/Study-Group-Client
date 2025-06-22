// File path__
import Main from "../Layouts/Main/Main";
import MyAssign from "../Layouts/Pages/MyAssign/MyAssign";
import ErrorPage from "../Layouts/Components/Error/ErrorPage";
import Assignment from "../Layouts/Pages/Assignment/Assignment";
import SignIn from "../Layouts/Pages/Authentication/SignIn/SignIn";
import SignUp from "../Layouts/Pages/Authentication/SignUp/SignUp";
import CreateAssign from "../Layouts/Pages/CreateAssign/CreateAssign";
import AssignDetails from "../Layouts/Pages/AssignDetails/AssignDetails";
import PendingAssign from "../Layouts/Pages/PendingAssign/PendingAssign";
import HomePageLayout from "../Layouts/Pages/Home/HomePageLayout/HomePageLayout";

// Package__
import { createBrowserRouter } from "react-router";
import VerifyUser from "../VerifyUser/VerifyUser";

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
        path: "/assignments",
        element: <Assignment></Assignment>,
      },
      {
        path: "/assignment-details/:id",
        element: (
          <VerifyUser>
            <AssignDetails></AssignDetails>
          </VerifyUser>
        ),
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_SERVER_API}/assignment-details/${params.id}`
          ),
      },
      {
        path: "/pending-assignments",
        element: (
          <VerifyUser>
            <PendingAssign></PendingAssign>
          </VerifyUser>
        ),
      },
      {
        path: "/create-assignments",
        element: <CreateAssign></CreateAssign>,
      },
      {
        path: "/my-assignments",
        element: <MyAssign></MyAssign>,
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
