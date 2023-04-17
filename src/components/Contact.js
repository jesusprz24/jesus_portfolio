import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <form className="w-1/2">
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-lg mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-400 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-400 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="text-lg mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-400 rounded-lg px-4 py-2 h-32"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

  