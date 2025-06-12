// File path__
import "./AssignDetails.css";
import { AuthContext } from "../../../Provider/AuthProvider";

// Package__
import { useLoaderData } from "react-router";

// From react__
import { useContext, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AssignDetails = () => {
  const [topic, setTopic] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [updateCount, setUpdateCount] = useState(false);
  const [updateData, setUpdateData] = useState(null);

  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const assignmentData = useLoaderData();
  const {
    _id,
    topicName,
    subject,
    level,
    mark,
    totalSubmit,
    instruction,
    questions,
    createdBy,
  } = assignmentData;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("topicName", topic);
    formData.append("subject", subject);
    formData.append("mark", mark);
    formData.append("assignmentFile", pdfFile);
    formData.append("userEmail", user.email);
    formData.append("creatorEmail", createdBy.email);

    const res = await axiosSecure.post("/submitted-assignment-data", formData);
    console.log(res.data);
    if (res.data.insertedId) {
      document.getElementById("modal_close_btn").click();

      Swal.fire({
        title: "Assignment submitted. Wait for your marks",
        icon: "success",
        draggable: true,
      });

      setTopic("");
      setPdfFile(null);

      handleSubmitCount();
    }
  };

  const handleSubmitCount = async () => {
    const newSubmitCount = totalSubmit + 1;
    setUpdateData(newSubmitCount);
    const res = await axiosSecure.patch(`/assignment-data-update/${_id}`, {
      totalSubmit: newSubmitCount,
    });
    if (res.data.modifiedCount) {
      setUpdateCount(true);
    }
  };

  return (
    <>
      <section id="assign_details_section">
        <div className="main_assign_details_container">
          <div className="assign_details_banner_container">
            <img
              src="https://i.postimg.cc/bwvm9cjf/assign-banner.jpg"
              alt="Assignment banner"
            />
          </div>

          <div className="assign_details_info_parent_container">
            <div className="assign_info_container">
              <h2>{topicName}</h2>
              <ul>
                <li>
                  <span>Subject: </span>
                  <i>{subject}</i>
                </li>
                <li>
                  <span>Level: </span>
                  <i>{level}</i>
                </li>
                <li>
                  <span>Total Submitted: </span>
                  <b>{updateCount ? updateData : totalSubmit} </b>
                  <i>Assignments</i>
                </li>
                <li>
                  <span>Total Mark: </span> <i>{mark}</i>
                </li>
              </ul>
            </div>

            <div className="assign_instruction_container">
              <article>
                <i>
                  <span>
                    <b>
                      <u>Instruction:</u>
                    </b>{" "}
                  </span>
                  {instruction}
                </i>
              </article>
            </div>
          </div>

          <div className="assign_question_parent_container">
            <h2>Assignment Questions</h2>

            {questions.map((ques) => (
              <div key={ques.number} className="assign_question_container">
                <span>Question No: {ques.number}</span>
                <p>
                  <i>{ques.question}</i>
                </p>
              </div>
            ))}
          </div>

          <div className="assign_submit_container">
            {user?.email !== createdBy.email && (
              <button
                onClick={() =>
                  document.getElementById("assign_form_modal").showModal()
                }
              >
                Submit assignment
              </button>
            )}
          </div>

          {/* Assignment submit form modal__ST */}

          <dialog
            id="assign_form_modal"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div className="flex items-start justify-between">
                <h3 className="assign_submit_title">Submit You Assignment</h3>
                <form method="dialog">
                  <button id="modal_close_btn">
                    <RxCrossCircled size={30} />
                  </button>
                </form>
              </div>

              <div>
                <form className="assignment_form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="text_input"
                    placeholder="Enter topic name"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    required
                  />

                  <p className="warning_text">
                    ⚠️ Make sure your topic name exactly matches the assignment
                    name. Otherwise, your submission may be rejected.
                  </p>

                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="text_input"
                    required
                  />

                  <button type="submit" className="submit_btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </dialog>

          {/* Assignment submit form modal__END */}

          <div className="assign_creator_info_parent_container">
            <h2>Cerated By</h2>
            <div className="assign_creator_info_container">
              <p>
                _This assignment was created by{" "}
                <i>
                  <b>{createdBy.name}</b>
                </i>
                .
              </p>

              {user?.email !== createdBy.email && (
                <p>
                  _If you have any questions about the assignment, you can email
                  me at{" "}
                  <i>
                    <a href="#">{createdBy.email}</a>
                  </i>
                </p>
              )}

              {user?.email === createdBy.email && (
                <span>
                  _Do you want to make any changes such as{" "}
                  <button className="assign_change_btn" id="assign_update_btn">
                    Update
                  </button>{" "}
                  or{" "}
                  <button className="assign_change_btn" id="assign_delete_btn">
                    Delete
                  </button>{" "}
                  the assignment?
                </span>
              )}
            </div>
          </div>

          <div className="assign_guide_parent_container">
            <h2>Follow the step to get full marks</h2>
            <div className="assign_guide_wrapper">
              <div className="assign_guide_card">
                <h2 className="assign_guide_title">
                  📌 How to Submit Your Assignment
                </h2>
                <ul className="assign_guide_list">
                  <li>
                    <span className="assign_guide_bullet">1.</span> Click the
                    green <strong>“Submit Assignment”</strong> button.
                  </li>
                  <li>
                    <span className="assign_guide_bullet">2.</span> Enter the
                    correct <strong>topic name</strong> in the form.
                  </li>
                  <li>
                    <span className="assign_guide_bullet">3.</span> Upload your{" "}
                    <strong>assignment as a PDF</strong> file only. No images or
                    other formats.
                  </li>
                  <li>
                    <span className="assign_guide_bullet">4.</span> Submitting
                    the wrong file type will result in <strong>0 marks</strong>.
                  </li>
                  <li>
                    <span className="assign_guide_bullet">5.</span> Make sure
                    the PDF is clear and readable before uploading.
                  </li>
                </ul>
              </div>

              <div className="assign_guide_card">
                <h2 className="assign_guide_title">📝 How We Give Marks</h2>
                <ul className="assign_guide_list">
                  <li>
                    <span className="assign_guide_bullet">✔</span> Based on{" "}
                    <strong>correct answers</strong>.
                  </li>
                  <li>
                    <span className="assign_guide_bullet">✔</span> Short and
                    useful <strong>extra information</strong> gives more marks.
                  </li>
                  <li>
                    <span className="assign_guide_bullet">✔</span> Good{" "}
                    <strong>PDF layout</strong> and organized content matter.
                  </li>
                  <li>
                    <span className="assign_guide_bullet">✔</span> Easy-to-read
                    text is important.
                  </li>
                  <li>
                    <span className="assign_guide_bullet">✔</span> A neat,
                    well-presented answer sheet makes a big difference.
                  </li>
                </ul>
                <p className="assign_guide_note">
                  ⚠ Submitting the wrong file or messy content may result in
                  lower or <strong>zero marks</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssignDetails;
