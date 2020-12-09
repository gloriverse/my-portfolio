import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Navbar() {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Glori
          </NavLink>
          {/* <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-green-800"
            activeClassName="text-gray-100 bg-gray-700"
          >
            Blog Post
          </NavLink> */}
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-green-800"
            activeClassName="text-gray-100 bg-gray-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-green-800"
            activeClassName="text-gray-100 bg-gray-700"
          >
            About me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/gloriverse"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/christian-paul-966673183/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
