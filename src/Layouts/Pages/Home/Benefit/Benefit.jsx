import "./Benefit.css";

const Benefit = () => {
  return (
    <>
      <section id="benefit_section">
        <div className="wrapper">
          <figure className="card">
            <img
              src="https://i.postimg.cc/3wG2jYg4/Benefit.jpg"
              alt="Picture of a girl"
            />
            <figcaption>
              <blockquote>Stronger Together, Smarter Forever</blockquote>
              <cite>
                Discover how collaborative learning boosts understanding, builds
                confidence, and keeps you motivated every step of the way.
              </cite>
              <p className="credit">
                <strong>Study Group</strong>,{" "}
              </p>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Benefit;
