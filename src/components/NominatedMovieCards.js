import React from "react";
import { Controller } from "./Controller";

export const NominatedMovieCards = ({ info, type }) => {
  return (
    <div
      className="movie-card"
      style={{
        width: "100%",
        paddingLeft: "10%",
        height: "30rem",
        borderRadius: "5px",
        overflow: "hidden",
        position: "relative",
        border: "0",
        display: "block",
      }}
    >
      {info.Poster ? (
        <img
          src={info.Poster}
          alt={info.Title}
          style={{
            width: "80%",
            display: "block",
          }}
        />
      ) : (
        <div
          className="filter-poster"
          style={{
            width: "100%",
            display: "block",
          }}
        ></div>
      )}
      <div
        className="info"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="header">
          <h3
            className="title"
            style={{
              fontSize: "1.25rem",
              color: "#032541",
              fontWeight: "600",
              margin: "0",
            }}
          >
            {info.Title}
          </h3>
          <h4
            className="release-date"
            style={{
              fontSize: "1.25rem",
              fontWeight: "300",
              color: "#032541",
              margin: "0",
            }}
          >
            {info.Year ? info.Year : "Cannot Find Release Year"}
          </h4>
        </div>
      </div>
      <Controller type={type} info={info} />
    </div>
  );
};
