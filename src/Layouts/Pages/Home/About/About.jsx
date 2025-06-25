// File path__
import "./About.css";

// From react__
import { useState } from "react";

const About = () => {
  const [current, setCurrent] = useState(1);

  return (
    <>
      <section id="about_section">
        <div className="card_slider">
          {[1, 2, 3].map((num) => (
            <article
              key={num}
              className={`card_slider_card ${current === num ? "active" : ""}`}
            >
              <header>
                <h2>
                  {num === 1
                    ? "Study"
                    : num === 2
                    ? "Assignment"
                    : "Study Group"}
                </h2>
                <button
                  onClick={() => setCurrent(num === 3 ? 1 : num + 1)}
                  aria-label="Next"
                >
                  &#10539;
                </button>
              </header>

              <div className="card_slider_content">
                <img
                  src={`https://i.postimg.cc/KjdPt97c/study.jpg${
                    num === 1 ? 641 : num === 2 ? 634 : 824
                  }/200/200`}
                  alt="Slide Visual"
                />

                <div className="poem">
                  {num === 1 && (
                    <>
                      <p>
                        A quiet desk waits under evening's glow,
                        <br />
                        Its books stacked high, each thought in a row.
                        <br />
                        The ticking clock marks knowledge’s climb,
                        <br />
                        As pages turn with the weight of time.
                      </p>

                      <p>
                        Minds once idle now burn with fire,
                        <br />
                        Fueled by goals and deep desire.
                        <br />
                        Notes like maps across the page,
                        <br />
                        Tracing paths both wise and sage.
                      </p>

                      <p>
                        The lamp hums soft in midnight air,
                        <br />
                        Guiding dreams shaped by care.
                        <br />
                        Mistakes and wins both leave a mark,
                        <br />
                        In every light, and every dark.
                      </p>

                      <p>
                        And when the dawn breaks through the pane,
                        <br />
                        The effort echoes—not in vain.
                        <br />
                        For every hour poured in the night,
                        <br />
                        Becomes a step toward future’s light.
                      </p>
                    </>
                  )}
                  {num === 2 && (
                    <>
                      <p>
                        Assignments guide the mind each day,
                        <br />
                        Helping thoughts not drift away.
                        <br />
                        They train the brain to think and try,
                        <br />
                        To question how, to wonder why.
                      </p>
                      <p>
                        Each task we take, each word we write,
                        <br />
                        Builds stronger skills, both sharp and bright.
                        <br />
                        They show our gaps, reveal what’s clear,
                        <br />
                        And bring our distant goals more near.
                      </p>
                      <p>
                        Step by step, we learn and grow,
                        <br />
                        Through every challenge assignments show.
                        <br />
                        With effort placed in every line,
                        <br />
                        We shape a future strong and fine.
                      </p>
                      <p>
                        So though they may seem hard or long,
                        <br />
                        They make our weak parts wise and strong.
                        <br />
                        For every page and every part—
                        <br />
                        An assignment builds a better heart.
                      </p>
                    </>
                  )}
                  {num === 3 && (
                    <>
                      <p>
                        There once was a pineapple, proud and round,
                        <br />
                        Who somehow sprouted in farming ground.
                        <br />
                        Among the wheat and rows of corn,
                        <br />
                        He stood confused, alone, forlorn.
                      </p>
                      <p>
                        The carrots laughed, “You’re not from here!”
                        <br />
                        The turnips jeered, “Go disappear!”
                        <br />
                        But Pineapple puffed his leafy crown,
                        <br />
                        And said, “I’m tropic royalty, calm down.”
                      </p>
                      <p>
                        He tried to blend with grassy flair,
                        <br />
                        But sunburned cows just stopped to stare.
                        <br />
                        A scarecrow waved in silent cheer,
                        <br />
                        The only friend who came too near.
                      </p>
                      <p>
                        Then came the rain, a soggy squall,
                        <br />
                        And Pineapple held his ground through all.
                        <br />
                        The field soon saw, with sweet surprise,
                        <br />
                        He kept the pests from eating pies.
                      </p>
                      <p>
                        Now every crop from kale to pea,
                        <br />
                        Tips their roots respectfully.
                        <br />
                        The lesson clear, as farmers yield:
                        <br />
                        Don’t judge a fruit by where it’s fielded.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;