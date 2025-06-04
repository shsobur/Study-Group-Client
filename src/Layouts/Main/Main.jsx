// File path__
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

// Package__
import { Outlet } from "react-router";

// From react__
import React from "react";

const Main = () => {
  // const pathOne = "/sign-in";
  // const pathTwo = "/sign-up";
  // const currentPath = window.location.pathname;

  return (
    <>
      <section>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </section>
    </>
  );
};

export default Main;
