import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <h1>Space X</h1>
    </div>
  );
};

export default Header;
