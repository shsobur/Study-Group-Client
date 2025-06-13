import { MdOutlineFileDownload } from "react-icons/md";
import "./PendingAssign.css";
import { useState } from "react";

const PendingAssign = () => {
  const [isActive, setIsActive] = useState(null);

  return (
    <>
      <section id="pending_assignment_section">
        <div className="main_pending_assign_container">
          <h1 className="pending_assign_title">Pending Assignments</h1>

          <div className="pending_assign_card_parent_container">
            <h1>Total assignment pending: 358</h1>

            <div className="pending_assign_card_container">
              <div className="pending_assign_number">
                <h1>01.</h1>
              </div>

              <div className="pending_assign_card_title">
                <h2>Introduction to Computer and Its Parts</h2>
                <p>
                  <b>Subject:</b> English
                </p>
                <p>
                  <b>Submitted on:</b> 13-06-2025
                </p>
              </div>

              <div className="pending_assign_card_mark">
                <h2>
                  Assignment submitted <br /> for <b>60</b> mark.
                </h2>
              </div>

              <div className="pending_assign_card_status">
                <button>Status: Pending</button>
                <br />
                <button
                  onClick={() => setIsActive(1)}
                  className={
                    isActive === 1
                      ? "active_assign_style"
                      : "none_active_assign_style"
                  }
                >
                  Check Assignment PDF
                </button>
              </div>

              <div className="pending_assign_card_file">
                {isActive === 1 ? (
                  <button className="pending_assign_active_pdf">
                    <MdOutlineFileDownload /> <a href="#">PDF</a>
                  </button>
                ) : (
                  <button disabled className="pending_assign_none_active_pdf">
                    <MdOutlineFileDownload /> <a href="#">PDF</a>
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default PendingAssign;
