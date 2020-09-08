import React, { useState } from "react";
import axios from "axios";

export const Searchpage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    //   axios
    //     .get(
    //       `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&type=movie&t=${e.target.value}&`
    //     )
    //     .then((res) => res.data)
    //     .then((data) => {
    //       if (!data.error) {
    //         setResults(data.results);
    //       } else {
    //         setResults([]);
    //       }
    //     });
    // };

    fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&type=movie&t=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  //       if (!data.error) {
  //         setResults(data.results);
  //       } else {
  //         setResults([]);
  //       }
  //     });
  // };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for movies"
              value={query}
              onChange={onChange}
            />
          </div>
          {/* {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li>{movie.title}</li>
              ))}
            </ul>
          )} */}
        </div>
      </div>
    </div>
  );
};
