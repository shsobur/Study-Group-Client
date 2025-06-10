import { useContext } from "react";
import "./AssignDetails.css";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../../Provider/AuthProvider";

const AssignDetails = () => {
  const { user } = useContext(AuthContext);
  const assignmentData = useLoaderData();
  const {
    topicName,
    subject,
    level,
    mark,
    totalSubmit,
    instruction,
    questions,
    createdBy,
  } = assignmentData;

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
                  {subject}
                </li>
                <li>
                  <span>Level: </span>
                  {level}
                </li>
                <li>
                  <span>Total Submitted: </span>
                  {totalSubmit} Assignments
                </li>
                <li>
                  <span>Total Mark: </span>
                  {mark}
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
            <button>Submit assignment</button>
          </div>

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
