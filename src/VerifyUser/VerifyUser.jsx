//  🔗 File path__
import { AuthContext } from "../Provider/AuthProvider";

// 📦 Package__
import { Navigate } from "react-router-dom";

// ⚛️ From react__
import { useContext } from "react";

const VerifyUser = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // Show loading spinner while authentication state is being determined__
  if (loading) {
    return (
      <>
        <div className="w-full mt-5 mb-5 gap-5 flex justify-center flex-col items-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#000000]"></div>
          <h1 className="text-3xl text-center font-bold text-[#000000]">
            loading...
            <br />
            <span className="text-lg font-semibold"> Please wait!</span>
          </h1>
        </div>
      </>
    );
  }

  // If user is authenticated, show the protected content__
  if (user) {
    return children;
  }

  // If not authenticated, redirect to sign-in__
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default VerifyUser;
