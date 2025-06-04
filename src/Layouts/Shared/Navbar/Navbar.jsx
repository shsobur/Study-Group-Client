// File path__
import "./Navbar.css";
import { AuthContext } from "../../../Provider/AuthProvider";
import logo from "../../../assets/logo.png";

// Imported package__
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router";
// React icons__
import { RxCross1, RxLapTimer } from "react-icons/rx";
import { PiSignIn } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FiCheckSquare, FiMessageCircle } from "react-icons/fi";
import { AiOutlineShopping } from "react-icons/ai";
import { HiMiniUserCircle } from "react-icons/hi2";
import { RiContactsBook2Line } from "react-icons/ri";
import {
  MdKeyboardArrowDown,
  MdOutlineAssignment,
  MdOutlineSpaceDashboard,
} from "react-icons/md";

// From react__
import { useRef } from "react";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";

const Navbar = () => {
  const menuRef = useRef();
  const [open, setOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [userImage, setUserImage] = useState(null);

  // Handle use image__
  useEffect(() => {
    if (user) {
      setUserImage(user.photoURL);
    }
  }, [user]);

  // Handle Close Dropdown__
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Scrolling__
  useEffect(() => {
    let lastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsScrollingDown(true);
      } else if (scrollTop < lastScrollTop) {
        setIsScrollingDown(false);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Stop Scroll__
  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "auto";
      return;
    }
    document.body.style.overflow = "hidden";
  }, [menuOpen]);

  // Handle logout__
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Logout",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, 100%",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              title: "Logged Out!",
              text: "You are successfully loge out from the website",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <>
      <nav>
        {/* Desktop layout__ */}
        <div
          id={isScrollingDown ? "navbar_close" : "navbar_open"}
          className="main_navbar_container"
        >
          <div className="navbar_content_container">
            <h1 className="navbar_logo">
              <img src={logo} alt="Logo" />
              <span>Study Group</span>
            </h1>

            <ul className="navbar_routes_container">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active_style" : "")}
              >
                <li>Home</li>
              </NavLink>

              <NavLink
                to="/assignments"
                className={({ isActive }) => (isActive ? "active_style" : "")}
              >
                <li>Assignments</li>
              </NavLink>

              <NavLink
                to="/pending-assignments"
                className={({ isActive }) => (isActive ? "active_style" : "")}
              >
                <li>Pending Assignments</li>
              </NavLink>
            </ul>

            <div className="dropdown_wrapper" ref={menuRef}>
              <button
                className="dropdown_button"
                onClick={() => setOpen(!open)}
              >
                {userImage !== null ? (
                  <img title={user.email} src={userImage} alt="Use Image" />
                ) : (
                  <HiMiniUserCircle />
                )}

                <span>
                  <MdKeyboardArrowDown />
                </span>
              </button>

              <div className={`dropdown_menu ${open ? "open" : ""}`}>
                <h1 className="user_name">Hi, {user.displayName}</h1>
                <hr></hr>
                <hr></hr>

                <Link to="/create-assignments">
                  <span href="#" className="dropdown_item">
                    <HiOutlinePencilAlt />
                    Create Assignments
                  </span>
                </Link>

                <Link to="/my-attempted-assignments">
                  <span className="dropdown_item">
                    <FiCheckSquare />
                    My Attempted Assignments
                  </span>
                </Link>

                {user ? (
                  <span onClick={handleLogOut} className="dropdown_item">
                    <PiSignIn /> Sign Out
                  </span>
                ) : (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active_style" : ""
                    }
                    to="/sign-in"
                  >
                    <span
                      onClick={() => setOpen(!open)}
                      className="dropdown_item"
                    >
                      <PiSignIn /> Sign In
                    </span>
                  </NavLink>
                )}
              </div>
            </div>

            <div className="mobile_menu_container">
              <span onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <RxCross1 /> : <IoIosMenu />}
              </span>
            </div>
          </div>

          {/* Mobile layout__ */}
          <div
            id={menuOpen ? "" : "menu_close"}
            className="main_mobile_menu_container"
          >
            <div className="mobile_menu_routes">
              <ul>
                <NavLink
                  className={({ isActive }) => (isActive ? "active_style" : "")}
                  to="/"
                >
                  <li>
                    <IoHomeOutline /> _Home
                  </li>
                </NavLink>
                <NavLink
                  to="/assignments"
                  className={({ isActive }) => (isActive ? "active_style" : "")}
                >
                  <li>
                    <MdOutlineAssignment /> _Assignments
                  </li>
                </NavLink>
                <NavLink
                  to="/pending-assignments"
                  className={({ isActive }) => (isActive ? "active_style" : "")}
                >
                  <li>
                    <RxLapTimer /> _Pending Assignments
                  </li>
                </NavLink>
              </ul>

              <div className="others_routes_container">
                <ul>
                  <NavLink
                    to="/create-assignments"
                    className={({ isActive }) =>
                      isActive ? "dropdown_active_style" : ""
                    }
                  >
                    <li>
                      <HiOutlinePencilAlt /> Create Assignments
                    </li>
                  </NavLink>
                  <Link to="/dashboard">
                    <li>
                      <FiCheckSquare size={18} /> My Attempted Assignments
                    </li>
                  </Link>
                  {user ? (
                    <li onClick={handleLogOut}>
                      <PiSignIn />
                      Sign Out
                    </li>
                  ) : (
                    <NavLink
                      to="/sign-in"
                      className={({ isActive }) =>
                        isActive ? "dropdown_active_style" : ""
                      }
                    >
                      <li>
                        <PiSignIn />
                        Sign In
                      </li>
                    </NavLink>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
