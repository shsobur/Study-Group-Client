// File path__
import "./About.css";
import { useState, useEffect } from "react";

const About = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      title: "Study",
      icon: "📚",
      content: [
        "A quiet desk waits under evening's glow,",
        "Its books stacked high, each thought in a row.",
        "The ticking clock marks knowledge's climb,",
        "As pages turn with the weight of time.",
        "Minds once idle now burn with fire,",
        "Fueled by goals and deep desire.",
        "Notes like maps across the page,",
        "Tracing paths both wise and sage."
      ],
      color: "#7e57c2"
    },
    {
      title: "Assignment",
      icon: "📝",
      content: [
        "Assignments guide the mind each day,",
        "Helping thoughts not drift away.",
        "They train the brain to think and try,",
        "To question how, to wonder why.",
        "Each task we take, each word we write,",
        "Builds stronger skills, both sharp and bright.",
        "They show our gaps, reveal what's clear,",
        "And bring our distant goals more near."
      ],
      color: "#5e35b1"
    },
    {
      title: "Study Group",
      icon: "👥",
      content: [
        "There once was a pineapple, proud and round,",
        "Who somehow sprouted in farming ground.",
        "Among the wheat and rows of corn,",
        "He stood confused, alone, forlorn.",
        "The carrots laughed, 'You're not from here!'",
        "The turnips jeered, 'Go disappear!'",
        "But Pineapple puffed his leafy crown,",
        "And said, 'I'm tropic royalty, calm down.'"
      ],
      color: "#4527a0"
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section id="about_section">
      <div className="slider_wrapper">
        <div className="slider_container">
          <div className="slider_track" style={{ '--current': current, '--direction': direction }}>
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`slide ${index === current ? 'active' : ''} ${
                  index === (current - 1 + slides.length) % slides.length ? 'prev' : ''
                } ${index === (current + 1) % slides.length ? 'next' : ''}`}
                style={{ '--slide-color': slide.color }}
              >
                <div className="slide_content">
                  <div className="slide_header">
                    <div className="title_section">
                      <div className="icon_circle">
                        {slide.icon}
                      </div>
                      <h2>{slide.title}</h2>
                    </div>
                    
                    <div className="navigation_buttons">
                      <button onClick={prevSlide} className="nav_btn prev_btn">
                        ‹
                      </button>
                      <button onClick={nextSlide} className="nav_btn next_btn">
                        ›
                      </button>
                    </div>
                  </div>

                  <div className="slide_body">
                    <div className="image_section">
                      <div className="image_wrapper">
                        <img
                          src={`https://i.postimg.cc/KjdPt97c/study.jpg${
                            index === 0 ? 641 : index === 1 ? 634 : 824
                          }/500/400`}
                          alt={slide.title}
                        />
                        <div className="image_overlay"></div>
                      </div>
                    </div>

                    <div className="text_section">
                      <div className="poem_container">
                        {slide.content.map((line, lineIndex) => (
                          <p key={lineIndex} className="poem_line">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="progress_container">
            <div 
              className="progress_bar" 
              key={current}
            ></div>
          </div>

          {/* Dots Navigation */}
          <div className="dots_navigation">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === current ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;