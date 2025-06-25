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
                    ? "Watchtower"
                    : num === 2
                    ? "Whispers in the Mist"
                    : "The Pineapple in the Field"}
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
                  src={`https://picsum.photos/id/${
                    num === 1 ? 641 : num === 2 ? 634 : 824
                  }/200/200`}
                  alt="Slide Visual"
                />

                <div className="poem">
                  {num === 1 && (
                    <>
                      <p>
                        A lone watchtower stands by the moaning shore,
                        <br />
                        Its shadow long, though eyes watch no more.
                        <br />
                        Salt-kissed winds whisper secrets of the sea,
                        <br />
                        But no soul stirs in its silent decree.
                      </p>
                      <p>
                        Once it scanned the horizon, steadfast and proud,
                        <br />
                        Now only gulls cry beneath gathering cloud.
                        <br />
                        Rust etches poems in its weathered face,
                        <br />
                        Time’s fingerprints left in every trace.
                      </p>
                      <p>
                        The tide comes and goes with a lover’s ache,
                        <br />
                        Touching its base, then gently breaks.
                        <br />
                        It dreams in creaks and the scent of brine,
                        <br />
                        Of voices lost in the strands of time.
                      </p>
                      <p>
                        Yet still it stands, as dusk turns to night,
                        <br />
                        A sentinel steeped in fading light—
                        <br />
                        Lonely, yes, but never quite bare,
                        <br />
                        For the sea and stars still know it's there.
                      </p>
                    </>
                  )}
                  {num === 2 && (
                    <>
                      <p>
                        The forest sleeps beneath a shroud of grey,
                        <br />
                        Where dawn forgets to find its way.
                        <br />
                        Each branch is cloaked in silver breath,
                        <br />
                        Suspended still, in quiet death.
                      </p>
                      <p>
                        No bird dares break the woven hush,
                        <br />
                        No footstep stirs the softened brush.
                        <br />
                        Only the mist moves, slow and thin,
                        <br />
                        Like ghostly fingers drawing in.
                      </p>
                      <p>
                        Moss clings tight to oaken skin,
                        <br />
                        Guarding secrets held within.
                        <br />
                        And somewhere deep, beyond the veil,
                        <br />
                        Old echoes ride the morning pale.
                      </p>
                      <p>
                        A place of dreams, or things once lost,
                        <br />
                        Where time forgets and paths are crossed.
                        <br />
                        The forest waits with breath held tight—
                        <br />A world between the dark and light.
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
