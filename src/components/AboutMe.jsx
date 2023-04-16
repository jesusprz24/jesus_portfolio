import React from "react";

function AboutMe() {
    return (
      <div className="container mx-auto my-10">
        <h1 className="text-3xl font-bold mb-5">About Me</h1>
        <p className="text-lg mb-5">
          Hi, my name is [YOUR NAME] and I'm a [YOUR JOB TITLE]. I have [NUMBER OF YEARS] of experience in [YOUR FIELD]. 
          I'm passionate about [SOMETHING YOU'RE PASSIONATE ABOUT].
        </p>
        <p className="text-lg mb-5">
          In my free time, I enjoy [SOMETHING YOU ENJOY DOING] and [ANOTHER THING YOU ENJOY DOING]. I also love [SOMETHING ELSE YOU LOVE].
        </p>
        <p className="text-lg">
          If you'd like to get in touch with me, feel free to [HOW TO GET IN TOUCH WITH YOU].
        </p>
      </div>
    );
  }

export default AboutMe