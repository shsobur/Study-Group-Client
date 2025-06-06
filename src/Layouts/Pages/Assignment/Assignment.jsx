import { useEffect, useState } from "react";
import "./Assignment.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Assignment = () => {
  const axiosPublic = useAxiosPublic();
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [recent, setRecent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosPublic
      .get(`/get-assignment?subject=${subject}&level=${level}&recent=${recent}`)
      .then((res) => {
        console.log(res.data);
      });
  }, [axiosPublic, subject, level, recent]);

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
                className="select select-info text-lg font-semibold"
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
                className="select select-info text-lg font-semibold"
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
                className="select select-info text-lg font-semibold"
              >
                <option value="" disabled>
                  Filter by Recency
                </option>
                <option>Filter off</option>
                <option>New Assignments</option>
                <option>Old Assignments</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Assignment;
