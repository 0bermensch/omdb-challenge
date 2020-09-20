import React, { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";

export const SearchMovieCard = ({ info }) => {
  const { addMovieToNominatelist, nominatelist } = useContext(GlobalContext);

  const storedMovie = nominatelist.find((o) => o.imdbID === info.imdbID);

  const nominatelistDisabled = storedMovie ? true : false;
  return (
    <div
      className="result-card"
      style={{
        display: "flex",
        marginBottom: "20px",
      }}
    >
      <div className="poster-wrapper">
        {info.Poster ? (
          <img
            src={info.Poster}
            alt={info.Title}
            style={{
              width: "75px",
              height: "110px",
              backgroundColor: "white",
              borderRadius: "5px",
              marginRight: "15px",
              display: "block",
              color: "transparent",
            }}
          />
        ) : (
          <div
            className="filter-poster"
            style={{
              width: "75px",
              height: "110px",
              backgroundColor: "white",
              borderRadius: "5px",
              marginRight: "15px",
              display: "block",
              color: "transparent",
            }}
          ></div>
        )}
      </div>
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
        <div className="controls">
          <button
            className="btn"
            disabled={nominatelistDisabled}
            onClick={() => addMovieToNominatelist(info)}
            style={{
              padding: "10px 15px",
              backgroundColor: "green",
              color: "#032541",
              borderRadius: "5px",
              textTransform: "uppercase",
              fontWeight: "700",
              display: "inline-block",
              border: "none",
              fontSize: "1rem",
              transition: "all 0.3s ease",
              lineHeight: "1.1",
              marginRight: "10px",
            }}
          >
            Nominate Movie
          </button>
        </div>
      </div>
    </div>
  );
};
