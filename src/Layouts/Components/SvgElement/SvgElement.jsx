import "./SvgElement.css";

const SvgElement = () => {
  return (
    <>
      <section>
        <div className="header">
          <div className="inner-header flex"></div>

          <div>
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  href="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgba(0,0, 0, 0.200)"
                />
                <use
                  href="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(0,0, 0, 0.500)"
                />
                <use
                  href="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgb(0, 0, 0, 0.600)"
                />
                <use href="#gentle-wave" x="48" y="7" fill="#0c0619" />
              </g>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default SvgElement;
