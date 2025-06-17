// File path__
import "./PendingAssign.css";

// Package__
import { MdOutlineFileDownload } from "react-icons/md";

// Form react__
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import { SlArrowLeftCircle } from "react-icons/sl";

const PendingAssign = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const [isActive, setIsActive] = useState(null);
  const [pendingAssignLoading, setPendingAssignLoading] = useState(false);
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const [singleAssignment, setSingleAssignment] = useState(null);
  const [errors, setErrors] = useState({});

  // Handle assignment mark variable__
  const totalQuestions = singleAssignment?.questionNumber;
  const totalMark = Number(singleAssignment?.assignmentMark);
  console.log(totalQuestions, totalMark);

  const questionSectionMax = totalQuestions * 5;
  const remainingMark = totalMark - questionSectionMax;
  const ruleMark = parseFloat((remainingMark / 4).toFixed(2));

  useEffect(() => {
    setPendingAssignLoading(true);
    axiosSecure
      .get(`/pending-assignment?userEmail=${user?.email}`)
      .then((res) => {
        setPendingAssignments(res.data);
        setPendingAssignLoading(false);
      });
  }, [axiosSecure, user]);

  // Handle assignment mark data__

  const [marks, setMarks] = useState({
    correct: 0,
    extra: 0,
    layout: 0,
    readable: 0,
    presentation: 0,
  });

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

  const total =
    marks.correct +
    marks.extra +
    marks.layout +
    marks.readable +
    marks.presentation;

  return (
    <>
      <section id="pending_assignment_section">
        <div className="main_pending_assign_container">
          <h1 className="pending_assign_title">Pending Assignments</h1>

          <div className="pending_assign_card_parent_container">
            <h1>Total assignment pending: {pendingAssignments.length}</h1>
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
                    </div>

                    <div className="pending_assign_card_mark">
                      <h2>
                        Assignment submitted <br /> for{" "}
                        <b>{assignment.assignmentMark}</b> mark.
                      </h2>
                    </div>

                    <div className="pending_assign_card_status">
                      <button>Status: {assignment.status}</button>
                      <br />
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
                    </div>

                    <div className="pending_assign_card_file">
                      {isActive === index ? (
                        <button className="pending_assign_active_pdf">
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

                      {isActive === index ? (
                        <button
                          onClick={() => {
                            setSingleAssignment(assignment);
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
                    </div>

                    {/* Mark modal form__ST */}

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
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
                            <button>
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

                            <button className="form_submit">Submit</button>
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
