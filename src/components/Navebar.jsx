import React from "react";
import { Link } from "react-router-dom";

const Navebar = () => {
  return (
    <div className="writer" style={{ color: "white" }}>
      <ul className="liste">
        <Link to="/">
          {" "}
          <li>Home</li>{" "}
        </Link>
      </ul>
    </div>
  );
};

export default Navebar;
