import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#032541",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0 20rem",
        }}
      >
        <div
          className="inner-content"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0",
          }}
        >
          <Link to="/">Find your Movie</Link>
        </div>
        <div
          className="nav-links"
          style={{
            padding: "0",
            margin: "0",
            listStyle: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/nominated">Nominated</Link>
        </div>
      </div>
    </header>
  );
};
