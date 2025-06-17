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
  const [myAssignments, setMyAssignments] = useState([]);
  const [assignIndex, setAssignIndex] = useState(null);
  const [myAssignLoading, setMyAssignLoading] = useState(false);

  useEffect(() => {
    setMyAssignLoading(true);
    axiosSecure
      .get(`/my-submitted-assignment?userEmail=${user?.email}`)
      .then((res) => {
        setMyAssignments(res.data);
        setMyAssignLoading(false);
      });
  }, [axiosSecure, user]);

  return (
    <section id="my_assign_section">
      <div className="main_my_assign_container">
        <h1 className="my_assign_title_container">Attempted Assignments</h1>

        <div className="my_assign_info_container">
          Total submit: {myAssignments.length}
        </div>

        <div className="my_assign_card_parent_container">
          {myAssignLoading ? (
            <div className="loading_parent_container">
              <div className="loading_container">
                <p>Loading. . .</p>
                <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
              </div>
            </div>
          ) : myAssignments === "" ? (
            <div className="no_attempted_assign_message">
              <h1>
                <i>
                  You don't have attempted any_ <br /> assignment!
                </i>
              </h1>
            </div>
          ) : (
            <>
              {myAssignments.map((assignment, index) => (
                <div
                  key={assignment._id}
                  className={`collapse collapse-arrow bg-base-100 border border-[#7429eb] mb-[20px] 
                  ${assignIndex === index ? "collapse-open" : ""}`}
                >
                  <div
                    className="my_assign_card_container collapse-title font-semibold cursor-pointer"
                    onClick={() =>
                      setAssignIndex(assignIndex === index ? null : index)
                    }
                  >
                    <div className="my_assign_number">
                      <span>{index + 1}.</span>
                    </div>

                    <div className="my_assign_card_title_container">
                      <h2>{assignment.name}</h2>
                      <p>
                        <b>Subject:</b>
                        <i> {assignment.subject}</i>
                      </p>

                      <p>
                        <b>Submit on:</b>
                        <i> {assignment.createdAt}</i>
                      </p>
                    </div>

                    <div className="my_assign_mark_container">
                      <h3>
                        <i>
                          Assignment submitted <br /> for{" "}
                          <b>{assignment.assignmentMark}</b> mark
                        </i>
                      </h3>
                    </div>

                    <div className="my_assign_status_container">
                      <button
                        className={
                          assignment.status === "Completed"
                            ? "assign_completed_btn_style"
                            : "assign_pending_btn_style"
                        }
                      >
                        Status: {assignment.status}
                      </button>
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
                      {assignment.mark ? (
                        <div className="assignment_complete_message">
                          <h1>Congratulations!</h1>
                          <p>You got</p>
                          <div className="assignment_mark_container">45/60</div>
                          <p>
                            Keep up the good work, you did amazing performance!
                          </p>
                        </div>
                      ) : (
                        <div className="assignment_pending_message">
                          <h1>
                            <i> Your assignment is being reviewed.</i>
                          </h1>
                          <p>
                            You can start another assignment during this time or
                            wait until the current one is reviewed.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyAssign;
