import React from "react";
import { Link } from "react-router-dom";
export const Browse = () => {
  return (
    <div>
      <div>
        <Link to="/browse" className="bg-black text-amber-300">
          Horha kya?
        </Link>
        <div className="bg-red-500">hello</div>
      </div>
    </div>
  );
};
