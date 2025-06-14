// File path__
import "./Footer.css";

// Package__
import { Link } from "react-router";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="main_footer_section_outer_container">
          <div className="main_footer_section_inner_container">
            <div className="footer_content_top_container">
              <div id="footer_box-1" className="main_footer_title_container">
                <div className="footer_main_title_container">
                  <h2>PayTrack</h2>
                </div>

                <p>
                  Simply dummy text of the and typesetting industry. This is
                  dummy text of the printing.Dolor sit amet consectetur
                  adipisicing elit. Officiis, nulla vero voluptatibus molestiae
                  sit dignissimos magnam tenetur laborum dolore.
                </p>

                <div className="footer_social_icon">
                  <h4>
                    <a href="https://www.facebook.com/zuck" target="main">
                      <CiFacebook />
                    </a>
                  </h4>
                  <h4>
                    <a
                      href="https://www.linkedin.com/in/ryanroslansky/"
                      target="main"
                    >
                      <CiLinkedin />
                    </a>
                  </h4>
                  <h4>
                    <a
                      href="https://www.instagram.com/kevin/?hl=en"
                      target="main"
                    >
                      <CiInstagram />
                    </a>
                  </h4>
                  <h4>
                    <a href="https://x.com/kevin" target="main">
                      <CiTwitter />
                    </a>
                  </h4>
                </div>
              </div>

              <div id="footer_box-2" className="main_footer_Info_container">
                <h2>Quick Links</h2>
                <p>
                  <Link to="/">Home</Link>
                </p>
                <p>
                  <Link to="/bill">Bill</Link>
                </p>
                <p>
                  <Link to="/about">About</Link>
                </p>
                <p>
                  <Link to="/contact">Contact Us</Link>
                </p>
              </div>

              <div id="footer_box-3" className="main_footer_Info_container">
                <h2>Services</h2>
                <p>Wish List</p>
                <p>Login</p>
                <p>Submit a Request</p>
                <p>Appointment</p>
                <p>Promotional Offers</p>
              </div>

              <div id="footer_box-4" className="main_footer_Info_container">
                <h2>Contract</h2>

                <div className="footer_contact_info_container">
                  <p>
                    <MdOutlineLocationOn />
                  </p>
                  <h3>124 Brooklyn, New York</h3>
                </div>

                <div className="footer_contact_info_container">
                  <p>
                    <AiOutlineMobile />
                  </p>
                  <h3>+880 17875 92274</h3>
                </div>
              </div>
            </div>

            <div className="footer_bottom_container">
              <div>
                © Copyright Study Group {currentYear} All Right Reserved.
              </div>
              <div>
                Terms Of Use <span className="pl-5 pr-5">|</span> Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;