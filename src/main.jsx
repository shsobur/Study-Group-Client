// File path__
import "./index.css";
import router from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider";

// Packages__
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

// From react__
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);