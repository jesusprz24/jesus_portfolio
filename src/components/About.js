import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <img
          src="/profile-picture.png"
          alt="Profile picture"
          className="rounded-full w-48 h-48 mb-4"
        />
        <p className="text-lg max-w-md text-center">
          Hello, My name is Jesus Perez Alvarado! I am a full stack developer and aspiring UI Designer.
        </p>
        
      </div>
    </div>
  );
}

export default About;
