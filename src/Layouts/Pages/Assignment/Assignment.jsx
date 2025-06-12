import "./Assignment.css";
import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import AssignCard from "../../Components/AssignCard/AssignCard";
import { AuthContext } from "../../../Provider/AuthProvider";

const Assignment = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [recent, setRecent] = useState("");
  const [loading, setLoading] = useState(false);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    setLoading(true);
    axiosPublic
      .get(
        `/get-assignment?subject=${subject}&level=${level}&recent=${recent}&userEmail=${user?.email}`
      )
      .then((res) => {
        setAssignments(res.data);
        setLoading(false);
      });
  }, [axiosPublic, subject, level, recent, user]);

  return (
    <>
      <section id="assignment_section">
        <div className="main_assignment_container">
          <h1 className="assignment_title_container">Find Your Assignment</h1>

          <div className="assignment_filter_parent_container">
            <h2>
              <i>Filter your assignments_ _</i>
            </h2>

            <div className="assignment_filter_container">
              <select
                defaultValue=""
                onChange={(e) => setSubject(e.target.value)}
                className="select select-primary text-lg font-semibold"
              >
                <option value="" disabled>
                  Pick Your Subject
                </option>
                <option>All</option>
                <option>ICT</option>
                <option>Math</option>
                <option>Bangla</option>
                <option>English</option>
              </select>

              <select
                defaultValue=""
                onChange={(e) => setLevel(e.target.value)}
                className="select select-primary text-lg font-semibold"
              >
                <option value="" disabled>
                  Match With Your Level
                </option>
                <option>Filter off</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>

              <select
                defaultValue=""
                onChange={(e) => setRecent(e.target.value)}
                className="select select-primary text-lg font-semibold"
              >
                <option value="" disabled>
                  Filter by Recency
                </option>
                <option>Filter off</option>
                <option>My Assignment</option>
                <option>New Assignments</option>
                <option>Old Assignments</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="loading_parent_container">
              <div className="loading_container">
                <p>Loading. . .</p>
                <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
              </div>
            </div>
          ) : (
            <div
              className={
                assignments.length !== 0 && "assignment_card_parent_container"
              }
            >
              {assignments.length === 0 ? (
                <div className="no_data_message_container">
                  <h1>
                    No data found! <small>for -</small>
                  </h1>
                  <p>
                    Subject{" "}
                    <b>
                      <i>{subject}</i>
                    </b>
                    , level{" "}
                    <b>
                      <i>{level}</i>
                    </b>
                    , and{" "}
                    <b>
                      <i>{recent}</i>
                    </b>
                  </p>
                </div>
              ) : (
                <>
                  {assignments.map((assignment) => (
                    <AssignCard
                      key={assignment._id}
                      assignment={assignment}
                    ></AssignCard>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Assignment;
