import React from "react";

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: "black" }}>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Jesus Perez Alvarado
            <br></br>
            <br className="hidden lg:inline-block" />I love building and designing apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I have always had a passion for Art, creativity, music, and making things come to life.
            I looked no further when I found a profession that could let me do all those.
            One day I wish to be not only a great developer but better than what I expected.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./home_pic.jpg"
          />
        </div>
      </div>
    </section>
  );
}
