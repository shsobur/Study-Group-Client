import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <>
      <section id="news_letter_section">
        <div className="main_news_letter_container">
          <div className="news_letter_content_parent_container">
            <div className="news_letter_content">
              <h1>Subscribe to out Newsletter</h1>
              <p>
                Your favorite assignment digest—packed with fresh ideas, hidden
                gems, <br></br> and a sprinkle of fun. Because learning should
                feel like a treat.
              </p>
              <div className="news_letter_input_container"> 
                <input
                  type="text"
                  placeholder="Enter you valid email address"
                />
                <button>Subscribe</button>
              </div>
            </div>

            <div className="news_letter_image">
              <img
                src="https://i.postimg.cc/xd1Lw2t9/7259813.jpg"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
