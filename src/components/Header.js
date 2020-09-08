import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <Link to="/">Find your Movie</Link>
        </div>
        <div className="nav-links">
          <Link to="/nominated">Nominated</Link>
        </div>
      </div>
    </header>
  );
};
