// File path__
import "./PendingAssign.css";

// Package__
import { MdOutlineFileDownload } from "react-icons/md";

// Form react__
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import { SlArrowLeftCircle } from "react-icons/sl";
import Swal from "sweetalert2";

const PendingAssign = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const [isActive, setIsActive] = useState(null);

  const [assignMarkLoading, setAssignMarkLoading] = useState(false);
  const [pendingAssignLoading, setPendingAssignLoading] = useState(false);

  const [pendingAssignments, setPendingAssignments] = useState([]);
  const [singleAssignment, setSingleAssignment] = useState(null);
  console.log(singleAssignment);
  const [assignmentId, setAssignmentId] = useState(null);
  const [errors, setErrors] = useState({});
  const [marks, setMarks] = useState({
    correct: 0,
    extra: 0,
    layout: 0,
    readable: 0,
    presentation: 0,
  });

  // Fetch pending assignments on component mount__
  useEffect(() => {
    handlePendingAssignments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [axiosSecure, user]);

  // Get all pending assignments__
  const handlePendingAssignments = async () => {
    setPendingAssignLoading(true);

    await axiosSecure
      .get(`/pending-assignment?userEmail=${user?.email}`)
      .then((res) => {
        setPendingAssignments(res.data);
        setPendingAssignLoading(false);
      })
      .catch((error) => {
        console.log("Failed to load pending assignment", error);
      })
      .finally(() => {
        setPendingAssignLoading(false);
      });
  };

  // Calculate mark distribution and rules based on total questions and marks__
  const totalQuestions = singleAssignment?.questionNumber;
  const totalMark = Number(singleAssignment?.assignmentMark);
  const questionSectionMax = totalQuestions * 5;
  const remainingMark = totalMark - questionSectionMax;
  const ruleMark = parseFloat((remainingMark / 4).toFixed(2));

  // Handle mark input changes and validation for each marking field__
  const handleChange = (field, value, max) => {
    const num = parseFloat(value);
    setMarks((prev) => ({
      ...prev,
      [field]: num >= 0 ? num : 0,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: num > max,
    }));
  };

  // Download assignment PDF using base64 encoded data (This download logic was created with the help of AI!)
  const handleAssignmentPDF = (file) => {
    const link = document.createElement("a");

    // Create a data URL from base64
    link.href = `data:${file.mimetype};base64,${file.data}`;
    link.download = file.name;

    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  // Calculate total score from all mark criteria__
  const total =
    marks.correct +
    marks.extra +
    marks.layout +
    marks.readable +
    marks.presentation;

  // Submit total marks and feedback for the selected assignment__
  const handleAssignmentMark = async () => {
    const assignmentMark = {
      totalMark: total,
      examinerFeedback: [
        `Based on correct answers - ${marks.correct}/${questionSectionMax}`,
        `Based on short and useful extra information - ${marks.extra}/${ruleMark}`,
        `Based on good PDF layout and organized content - ${marks.layout}/${ruleMark}`,
        `Based on easy-to-read text - ${marks.readable}/${ruleMark}`,
        `Based on neat and well-presented answer sheet - ${marks.presentation}/${ruleMark}`,
      ],
    };

    setAssignMarkLoading(true);
    const res = await axiosSecure.patch(
      `/assignment-mark/${assignmentId}`,
      assignmentMark
    );
    if (res.data.modifiedCount === 1) {
      setAssignMarkLoading(false);
      setAssignmentId(null);
      handlePendingAssignments();
      document.getElementById("modal_close_btn").click();
      Swal.fire("Assignment mark submitted successfully!");
    }
  };

  return (
    <>
      <section id="pending_assignment_section">
        <div className="main_pending_assign_container">
          <h1 className="pending_assign_title">Pending Assignments</h1>

          <div className="pending_assign_card_parent_container">
            {pendingAssignLoading ? (
              // This loading style is coming from "assignment component" (assignment.css)|
              <div className="loading_parent_container">
                <div className="loading_container">
                  <p>Loading. . .</p>
                  <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
                </div>
              </div>
            ) : (
              <>
                {pendingAssignments.map((assignment, index) => (
                  <div
                    key={assignment._id}
                    className="pending_assign_card_container"
                  >
                    <div className="pending_assign_number">
                      <h1>{index + 1}.</h1>
                    </div>

                    <div className="pending_assign_card_title">
                      <h2>{assignment.name}</h2>
                      <p>
                        <b>Subject:</b> {assignment.subject}
                      </p>
                      <p>
                        <b>Submitted on:</b> {assignment.createdAt}
                      </p>
                      <p className="text-blue-700">
                        <b className="text-black">Student email:</b>{" "}
                        <u>{assignment.userEmail}</u>
                      </p>
                    </div>

                    <div className="pending_assign_card_mark">
                      <h2>
                        Assignment submitted <br /> for{" "}
                        <b>{assignment.assignmentMark}</b> mark.
                      </h2>
                    </div>

                    <div className="pending_assign_card_status">
                      <button
                        className={
                          assignment.status === "Completed"
                            ? "assign_completed_status_btn"
                            : "assign_pending_status_btn"
                        }
                      >
                        Status: {assignment.status}
                      </button>
                      <br />
                      {assignment.status !== "Completed" && (
                        <button
                          onClick={() =>
                            setIsActive(isActive === index ? null : index)
                          }
                          className={
                            isActive === index
                              ? "active_assign_style"
                              : "none_active_assign_style"
                          }
                        >
                          Check Assignment PDF
                        </button>
                      )}
                    </div>

                    <div className="pending_assign_card_file">
                      {isActive === index ? (
                        <button
                          onClick={() => handleAssignmentPDF(assignment.file)}
                          className="pending_assign_active_pdf"
                        >
                          <MdOutlineFileDownload /> <a href="#">PDF</a>
                        </button>
                      ) : (
                        <button
                          disabled
                          className="pending_assign_none_active_pdf"
                        >
                          <MdOutlineFileDownload /> <a href="#">PDF</a>
                        </button>
                      )}
                      {assignment.status !== "Completed" && (
                        <>
                          {isActive === index ? (
                            <button
                              onClick={() => {
                                setSingleAssignment(assignment);
                                setAssignmentId(assignment._id);
                                document
                                  .getElementById("assignment_mark")
                                  .showModal();
                              }}
                              className="assign_mark_btn"
                            >
                              Give Marks
                            </button>
                          ) : (
                            <button className="transparent_assign_mark_btn">
                              Give Marks
                            </button>
                          )}
                        </>
                      )}
                    </div>

                    {/* Mark modal form__ST */}

                    <dialog
                      id="assignment_mark"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <div className="flex justify-between">
                          <h1 className="font-semibold text-2xl">
                            Give Assignment Marks
                          </h1>
                          <form method="dialog">
                            <button
                              id="modal_close_btn"
                              onClick={() =>
                                setMarks({
                                  correct: 0,
                                  extra: 0,
                                  layout: 0,
                                  readable: 0,
                                  presentation: 0,
                                })
                              }
                            >
                              <SlArrowLeftCircle size={30} />
                            </button>
                          </form>
                        </div>

                        <div className="assign_mark_parent_container">
                          <div className="form_wrapper">
                            <h2 className="form_title">Assignment Mark Form</h2>

                            <div className="form_section">
                              <label className="form_label">
                                Based on correct answers ({marks.correct} /{" "}
                                {questionSectionMax} max) {"->"} [Each correct
                                answer gets 5 marks]
                              </label>
                              <input
                                required
                                type="number"
                                step="0.01"
                                min="0"
                                max={questionSectionMax}
                                className="form_input"
                                value={marks.correct}
                                onChange={(e) =>
                                  handleChange(
                                    "correct",
                                    e.target.value,
                                    questionSectionMax
                                  )
                                }
                              />
                              {errors.correct && (
                                <p className="text-red-500 font-medium">
                                  Mark cannot exceed {questionSectionMax}
                                </p>
                              )}
                            </div>

                            {[
                              ["extra", "Short and useful extra information"],
                              [
                                "layout",
                                "Good PDF layout and organized content",
                              ],
                              ["readable", "Easy-to-read text"],
                              [
                                "presentation",
                                "Neat and well-presented answer sheet",
                              ],
                            ].map(([field, label]) => (
                              <div className="form_section" key={field}>
                                <label className="form_label">
                                  {label} ({marks[field]} / {ruleMark} max)
                                </label>
                                <input
                                  type="number"
                                  step="0.01"
                                  min="0"
                                  max={ruleMark}
                                  className="form_input"
                                  value={marks[field]}
                                  onChange={(e) =>
                                    handleChange(
                                      field,
                                      e.target.value,
                                      ruleMark
                                    )
                                  }
                                />
                                {errors[field] && (
                                  <p className="text-red-500 font-medium">
                                    Mark cannot exceed {ruleMark}
                                  </p>
                                )}
                              </div>
                            ))}

                            <div className="form_total">
                              Total Mark:{" "}
                              <span>
                                {total.toFixed(2)} / {totalMark}
                              </span>
                            </div>

                            {assignMarkLoading ? (
                              <button className="form_submit">Working</button>
                            ) : (
                              <button
                                onClick={handleAssignmentMark}
                                className="form_submit"
                              >
                                Submit
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </dialog>

                    {/* Mark modal form__END */}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PendingAssign;
