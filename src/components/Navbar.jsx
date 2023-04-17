import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        Jesus Perez Alvarado
      </div>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/social">Social Media</Link></li>
      <li><Link tp="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}


export default Navbar