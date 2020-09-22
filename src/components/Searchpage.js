import React, { useState } from "react";
import axios from "axios";
import { SearchMovieCard } from "./SearchMovieCard";

export const Searchpage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const API_KEY = "6c9fb82e";

  const movieTitle = (e) => {
    setQuery(e.target.value);
  };

  const movie = () => {
    axios
      .get(`https://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=${query}`)
      .then((res) => {
        setResults(res.data.Search.map((info) => info));
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div
          className="add-content"
          style={{
            padding: "50px 0",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <div
            className="input-wrapper"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <input
              type="text"
              placeholder="Search for movies"
              onChange={movieTitle}
              value={query}
              style={{
                width: "100%",
                backgroundColor: "#032541",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                color: "white",
                fontSize: "1.25rem",
              }}
            />
            <button
              onClick={movie}
              style={{
                width: "90px",
                height: "50px",
                borderRadius: "5px",
                backgroundColor: "#032541",
                color: "white",
                fontSize: "1rem",
                "&:hover": { opacity: "1" },
              }}
            >
              Search
            </button>
          </div>

          {results.length > 0 && (
            <ul
              className="results"
              style={{
                padding: "0",
                margin: "0",
                marginTop: "20px",
              }}
            >
              {results.map((info) => (
                <li
                  key={info.imdbID}
                  style={{
                    listStyle: "none",
                  }}
                >
                  <SearchMovieCard info={info} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
