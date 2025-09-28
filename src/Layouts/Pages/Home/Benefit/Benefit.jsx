import "./Benefit.css";

const Benefit = () => {
  return (
    <>
      <section id="benefit_section">
        <div className="main_benefit_container">
          <div className="benefit_content_container">
            <div className="benefit_text_container">
              <h1>Stronger Together, Smarter Forever</h1>
              <p>
                Discover how collaborative learning boosts understanding, builds
                confidence, and keeps you motivated every step of the way.
              </p>
            </div>
            <div className="benefit_image_container">
              <img
                src="https://i.postimg.cc/3wG2jYg4/Benefit.jpg"
                alt="image"
              />
              <span id="benefit_web_name">Study Group</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefit;