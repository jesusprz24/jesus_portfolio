import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        Jesus Perez Alvarado
      </div>
      <ul>
      <li>Home</li>
      <li><Link to="/about">About</Link></li>
      <li>Projects</li>
      <li>Social</li>
      <li>Contact</li>
      </ul>
    </div>
  )
}


export default Navbar