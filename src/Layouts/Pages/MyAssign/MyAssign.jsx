// File path__
import "./MyAssign.css";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";

// Package__
import { PiDownloadSimpleFill } from "react-icons/pi";

// From react__
import { useContext, useEffect, useState } from "react";

const MyAssign = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [myAssign, setMyAssign] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  console.log(myAssign);

  useEffect(() => {
    axiosSecure
      .get(`/my-submitted-assignment?userEmail=${user?.email}`)
      .then((res) => {
        setMyAssign(res.data);
      });
  }, [axiosSecure, user]);

  return (
    <section id="my_assign_section">
      <div className="main_my_assign_container">
        <h1 className="my_assign_title_container">Attempted Assignments</h1>

        <div className="my_assign_info_container">Total submit: 163</div>

        <div className="my_assign_card_parent_container">
          <div
            className={`collapse collapse-arrow bg-base-100 border border-[#7429eb] ${
              isOpen ? "collapse-open" : ""
            }`}
          >
            <div
              className="my_assign_card_container collapse-title font-semibold cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="my_assign_number">
                <span>10.</span>
              </div>

              <div className="my_assign_card_title_container">
                <h2>Introduction to Computer and Its Parts</h2>
                <p>
                  <b>Subject:</b>
                  <i> Bangla</i>
                </p>

                <p>
                  <b>Submit on:</b>
                  <i> 11-05-2005</i>
                </p>
              </div>

              <div className="my_assign_mark_container">
                <h3>
                  <i>
                    Assignment submitted <br /> for <b>60</b> mark
                  </i>
                </h3>
              </div>

              <div className="my_assign_status_container">
                <button>Status: Pending</button>
              </div>

              <div className="my_assign_file_container">
                <h3>
                  <a href="#">
                    <PiDownloadSimpleFill /> PDF
                  </a>
                </h3>
              </div>
            </div>

            <div className="collapse-content text-sm">
              <hr />
              <hr />
              <br />
              <div className="assignment_message_parent_container">
                <div className="assignment_pending_message">
                  <h1>
                    <i> Your assignment is being reviewed.</i>
                  </h1>
                  <p>
                    You can start another assignment during this time or wait
                    until the current one is reviewed.
                  </p>
                </div>

                {/* <div className="assignment_complete_message">
                  <h1>Congratulations!</h1>
                  <p>You got</p>
                  <div className="assignment_mark_container">45/60</div>
                  <p>Keep up the good work, you did amazing performance!</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAssign;