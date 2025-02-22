import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-purple-200 py-3 w-full flex flex-row justify-evenly ">
      <Link to="/aboutus" className="font-bold text-purple-800">
        {" "}
        About us
      </Link>
      <Link to="/gallery" className="font-bold text-purple-800">
        {" "}
        Gallery
      </Link>
      <Link to="/volunteer" className="font-bold text-purple-800">
        {" "}
        Volunteer
      </Link>
      <Link to="/donate" className="font-bold text-purple-800">
        {" "}
        Donate
      </Link>
    </div>
  );
};

export default Header;
