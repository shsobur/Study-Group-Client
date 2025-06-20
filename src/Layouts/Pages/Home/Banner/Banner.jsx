// File path__
import "./Banner.css";
import SvgElement from "../../../Components/SvgElement/SvgElement";

// Package__
import { Link } from "react-router";

const Banner = () => {
  return (
    <>
      <section id="banner_section">
        <div className="main_banner_section_container">
          <SvgElement></SvgElement>

          <div
            data-aos="zoom-in-down"
            data-aos-easing="linear"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            data-aos-duration="1300"
            className="banner_title_container"
          >
            <h1>
              <i>Smart Minds, Shared Goals</i>
            </h1>
            <p>
              Build knowledge together in a focused and friendly environment.
            </p>
            <Link>
              <button>Get Stared {"->"}</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;