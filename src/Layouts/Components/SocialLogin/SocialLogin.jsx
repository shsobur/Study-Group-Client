// File path__
import "./SocialLogin.css";
import { AuthContext } from "../../../Provider/AuthProvider";

// Packages__
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";

// From react__
import { useContext } from "react";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { handleGoogleSignIn } = useContext(AuthContext);

  // Handle Google authentication and navigate on success__
  const handleGoogleAuth = () => {
    handleGoogleSignIn()
      .then(() => {
        // Show success toast notification after login__
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section id="social_login_section">
        <button
          onClick={handleGoogleAuth}
          type="button"
          className="google_button"
        >
          <ul>
            <li>
              <FcGoogle />
            </li>
            <li>Sign in with Google</li>
          </ul>
        </button>

        <div className="divider">
          <span></span>
          <p>OR</p>
          <span></span>
        </div>
      </section>
    </>
  );
};

export default SocialLogin;