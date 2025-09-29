// File path__
import "./CreateAssign.css";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

// Package__
import Swal from "sweetalert2";
import { FcOk } from "react-icons/fc";

// From react__
import { useContext, useState } from "react";

const CreateAssign = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [topicName, setTopicName] = useState("");
  const [instruction, setInstruction] = useState("");
  const [mark, setMark] = useState(40);
  const [questions, setQuestions] = useState([""]);

  const [submitLoading, setSubmitLoading] = useState(false);

  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  // Update question text at a specific index__
  const handleQuestionChange = (index, value) => {
    const updated = [...questions];
    updated[index] = value;
    setQuestions(updated);
  };

  // Add a new empty question field__
  const addQuestion = () => {
    setQuestions([...questions, ""]);
  };

  // Handle assignment form submission and send data to backend__
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare assignment object to be sent, including questions with numbering__
    const assignment = {
      title,
      image,
      subject,
      level,
      topicName,
      instruction,
      questions: questions.map((q, i) => ({
        number: i + 1,
        question: q,
      })),
      mark: Number(mark),
      createdTime: new Date().toLocaleDateString("en-GB").split("/").join("-"),
      totalSubmit: 0,
      createdBy: {
        name: user.displayName,
        email: user.email,
      },
    };

    setSubmitLoading(true);
    const res = await axiosSecure.post("/new-assignment", assignment);
    if (res.data.insertedId) {
      setSubmitLoading(false);

      // Reset form fields and show success alert__
      Swal.fire({
        title: "Success",
        text: "Assignment Successfully Created",
      });

      setTitle("");
      setImage("");
      setSubject("");
      setLevel("");
      setTopicName("");
      setInstruction("");
      setMark(30);
      setQuestions([""]);
    }
  };

  return (
    <>
      <ScrollToTop></ScrollToTop>
      <section id="create_assign_section">
        <div className="main_create_assign_container">
          <div className="create_assign_title">
            <h1>Create Assignment</h1>
          </div>

          <div className="create_assign_parent_container">
            <div className="create_assign_left_container">
              <div className="warning_container">
                <FcOk /> Read Carefully
              </div>

              <div className="assign_role_parent_container">
                <div className="assign_role_container">
                  <h1 className="assign_role_title">
                    📚 Assignment Creation Rules
                  </h1>

                  <section className="assign_role_section">
                    <h2 className="assign_role_subtitle">🟣 General Rules</h2>
                    <ul className="assign_role_list">
                      <li>Use only English (simple and clear).</li>
                      <li>
                        Select the correct subject: Bangla, English, Math,
                        Science, or ICT.
                      </li>
                      <li>
                        Choose the appropriate level:
                        <ul>
                          <li>Easy → 3–4 short questions</li>
                          <li>Medium → 4–5 questions</li>
                          <li>Hard → 5+ thoughtful questions</li>
                        </ul>
                      </li>
                      <li>Write the full topic name (be specific).</li>
                    </ul>
                  </section>

                  <section className="assign_role_section">
                    <h2 className="assign_role_subtitle">
                      🟣 Instruction Writing Rules
                    </h2>
                    <ul className="assign_role_list">
                      <li>Keep it short and clear (8–20 lines).</li>
                      <li>Tell the student what to read and how to answer.</li>
                      <li>
                        Example: "Read the passage carefully. Then answer all
                        questions in your own words."
                      </li>
                    </ul>
                  </section>

                  <section className="assign_role_section">
                    <h2 className="assign_role_subtitle">
                      🟣 Question Writing Rules
                    </h2>
                    <ul className="assign_role_list">
                      <li>Use simple words and sentence structures.</li>
                      <li>Don't need to number each question.</li>
                      <li>Match the school level of the student.</li>
                    </ul>
                  </section>

                  <section className="assign_role_section">
                    <h2 className="assign_role_subtitle">
                      🟣 Mark & Submission
                    </h2>
                    <ul className="assign_role_list">
                      <li>Start mark from 40 or 40+.</li>
                      <li>
                        Each question is worth 5 marks. So if there are 5
                        questions, the total should be (5 × 5 + 10 = 35). Just
                        make sure to always add at least 10 extra marks. You can
                        give more if you want.
                      </li>
                    </ul>
                  </section>

                  <section className="assign_role_section">
                    <h2 className="assign_role_subtitle">🟣 Final Checklist</h2>
                    <ul className="assign_role_list">
                      <li>Check spelling and grammar.</li>
                      <li>
                        You can attach reading content or helpful links on
                        instruction if needed.
                      </li>
                    </ul>
                  </section>

                  <section className="assign_role_warning">
                    <p className="assign_role_warning_text">
                      ⚠️ <strong>Important:</strong> If you do not follow these
                      rules, your assignment may be rejected. After 10
                      rejections, your account may be{" "}
                      <strong>blocked by the Admin</strong>.
                    </p>
                  </section>
                </div>
              </div>
            </div>

            <div className="create_assign_right_container">
              <div className="assign_form_container">
                <h2 className="assign_form_title">
                  Start Creating Assignments
                </h2>
                <form onSubmit={handleSubmit} className="assign_form_wrapper">
                  <div className="assign_form_group">
                    <label>Title</label>
                    <input
                      type="text"
                      placeholder="Assignment title"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="assign_form_group">
                    <label>Image URL</label>
                    <input
                      type="url"
                      placeholder="(Optional) But 'Recommenced'"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div>

                  <div className="assign_form_group">
                    <label>Subject</label>
                    <select
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    >
                      <option value="">Select subject</option>
                      <option value="Bangla">Bangla</option>
                      <option value="English">English</option>
                      <option value="Math">Math</option>
                      <option value="Science">Science</option>
                      <option value="ICT">ICT</option>
                    </select>
                  </div>

                  <div className="assign_form_group">
                    <label>Level</label>
                    <select
                      required
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                    >
                      <option value="">Select level</option>
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </div>

                  <div className="assign_form_group">
                    <label>Topic Name</label>
                    <input
                      type="text"
                      placeholder="Topic name"
                      required
                      value={topicName}
                      onChange={(e) => setTopicName(e.target.value)}
                    />
                  </div>

                  <div className="assign_form_group">
                    <label>Instruction</label>
                    <textarea
                      placeholder="Write clear instructions..."
                      rows={4}
                      required
                      value={instruction}
                      onChange={(e) => setInstruction(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="assign_form_group">
                    <label>Questions</label>
                    {questions.map((q, i) => (
                      <input
                        key={i}
                        type="text"
                        value={q}
                        placeholder={`Question ${i + 1}`}
                        onChange={(e) =>
                          handleQuestionChange(i, e.target.value)
                        }
                        required
                        className="assign_form_question_input"
                      />
                    ))}
                    <button
                      type="button"
                      onClick={addQuestion}
                      className="assign_form_add_btn"
                    >
                      + Add Question
                    </button>
                  </div>

                  <div className="assign_form_group">
                    <label>
                      You have to start mark from{" "}
                      <b>minimum {questions.length * 5 + 10}</b> <br />
                      Follow{" "}
                      <b>
                        <i>"General Rules point 03"</i>
                      </b>{" "}
                      and{" "}
                      <b>
                        <i>"Mark & Submission point 02"</i>
                      </b>
                    </label>
                    <input
                      type="number"
                      min={40}
                      required
                      value={mark}
                      onChange={(e) => setMark(e.target.value)}
                    />
                  </div>

                  {submitLoading ? (
                    <button className="assign_form_submit_btn">
                      Working...
                    </button>
                  ) : (
                    <button type="submit" className="assign_form_submit_btn">
                      Submit Assignment
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateAssign;
