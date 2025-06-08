import { SiLevelsdotfyi } from "react-icons/si";
import "./AssignCard.css";
import { BsCalendar3 } from "react-icons/bs";
import { PiUserCircleCheckDuotone } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { TfiMarkerAlt } from "react-icons/tfi";

const AssignCard = ({ assignment }) => {
  const {
    image,
    title,
    mark,
    subject,
    totalSubmit,
    level,
    createdTime,
    createdBy,
  } = assignment;

  return (
    <>
      <section>
        <div className="card-container">
          <a className="hero-image-container">
            <img className="hero-image" src={image} alt="Assignment image" />
          </a>
          <main className="main-content">
            <h1>
              <i>Total Submit : {totalSubmit}</i>
            </h1>
            <p>
              {title.length !== 35 ? `${title.slice(0, 35)}...` : `${title}`}
            </p>

            <div className="flex-row">
              <div className="coin-base">
                <IoBookOutline size={30} color="#047cc7" />
                <h2>{subject}</h2>
              </div>

              <div className="time-left">
                <TfiMarkerAlt size={30} color="#047cc7" />
                <h2>{mark}</h2>
              </div>
            </div>

            <div className="flex-row">
              <div className="coin-base">
                <SiLevelsdotfyi size={25} color="#047cc7" />
                <h2>{level}</h2>
              </div>

              <div className="time-left">
                <BsCalendar3 size={25} color="#047cc7" />
                <h2>{createdTime}</h2>
              </div>
            </div>
          </main>
          <div className="card-attribute">
            <PiUserCircleCheckDuotone size={35} color="#047cc7" />
            <p>
              Created by <b>{createdBy.name}</b>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssignCard;
