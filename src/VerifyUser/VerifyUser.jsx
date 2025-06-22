//  🔗 File path__
import { AuthContext } from "../Provider/AuthProvider";

// 📦 Package__
import { Navigate, useLocation } from "react-router";

// ⚛️ From react__
import { useContext } from "react";

const VerifyUser = ({ children }) => {
  const location = useLocation();
  const { user, userLoading } = useContext(AuthContext);

  // Show loading spinner while authentication state is being determined__
  if (userLoading) {
    return (
      <>
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white bg-opacity-30">
          <div className="flex flex-col items-center gap-5 bg-purple-100 px-10 py-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#511da5]"></div>
            <h1 className="text-2xl text-center font-bold text-[#511da5]">
              Updating user data...
            </h1>
          </div>
        </div>
      </>
    );
  }

  // If user is authenticated, show the protected content__
  if (user) {
    return children;
  }

  // If not authenticated, redirect to sign-in__
  return <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>;
};

export default VerifyUser;
