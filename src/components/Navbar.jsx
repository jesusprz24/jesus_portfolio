import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-white font-bold text-xl" href="/">
          Logo
        </a>
        <div className="flex items-center">
          <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/">
            Home
          </a>
          <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/">
            About
          </a>
          <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}


export default Navbar