import React, { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";
import { NominatedMovieCards } from "./NominatedMovieCards";

export const Nominated = () => {
  const { nominatelist } = useContext(GlobalContext);
  return (
    <div
      className="nominate-page"
      style={{
        padding: "30px 0",
      }}
    >
      <div className="container">
        <div
          className="header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <h1 className="heading">Nominated List</h1>
          {nominatelist.length === 5 ? (
            <h1
              className="fivemovies"
              style={{
                position: "fixed",
                textAlign: "center",
                marginLeft: "20rem",
                fontWeight: "bold",
              }}
            >
              You Have Nominated Five Movies!!!
            </h1>
          ) : (
            <div></div>
          )}
        </div>
        {nominatelist.length > 0 ? (
          <div
            className="movie-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: "30px",
            }}
          >
            {nominatelist.map((info) => (
              <NominatedMovieCards info={info} type="nominatelist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movie">No Movies Nominated</h2>
        )}
      </div>
    </div>
  );
};
