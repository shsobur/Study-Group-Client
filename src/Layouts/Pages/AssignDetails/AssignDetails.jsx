import "./AssignDetails.css";

const AssignDetails = () => {
  return (
    <>
      <section id="assign_details_section">
        <div className="main_assign_details_container">
          <div className="assign_details_banner_container">
            <img
              src="https://i.postimg.cc/kXwvy8g0/assign-banner.png"
              alt="Assignment banner"
            />
          </div>

          <div className="assign_details_info_parent_container">
            <div className="assign_info_container">
              <h2>Bangla Assignment on Kobita O Kobir Jibon</h2>
              <ul>
                <li>
                  <span>Subject: </span>Bangla
                </li>
                <li>
                  <span>Level: </span>Easy
                </li>
                <li>
                  <span>Total Submitted: </span>17 Assignments
                </li>
                <li>
                  <span>Total Mark: </span>45
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
                  Dear student, read the poem 'Chhuti' written by Rabindranath
                  Tagore carefully. Then answer the following questions based on
                  the poem and the life of the poet. Use simple words in your
                  answer. Try to understand the emotion of the poem and explain
                  it in your own words. Follow grammar rules while writing.
                </i>
              </article>
            </div>
          </div>

          <div className="assign_question_parent_container">
            <h2>Assignment Questions</h2>

            <div className="assign_question_container">
              <span>Question No: 01</span>
              <p>
                <i>
                  Do you think the boy in the poem is happy or sad? Why do you
                  think so?
                </i>
              </p>
            </div>
          </div>

          <div className="assign_submit_container">
            <button>Submit assignment</button>
          </div>

          <div className="assign_creator_info_parent_container">
            <h2>Cerated By</h2>
            <div className="assign_creator_info_container">
              <p>_This assignment was created by <i><b>Sobur Hossen</b></i>.</p>
              <p>
                _If you have any questions about the assignment, you can email me
                at <i><a href="#">soburhossen234@gmail.com.</a></i>
              </p>
              <span>
                _Do you want to make any changes such as <button className="assign_change_btn" id="assign_update_btn">Update</button>{" "}
                or <button className="assign_change_btn" id="assign_delete_btn">Delete</button> the assignment?
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssignDetails;
