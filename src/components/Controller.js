import React, { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";

export const Controller = ({ info, type }) => {
  const { removeMovieFromNominatelist } = useContext(GlobalContext);
  return (
    <div
      className="inner-card-controls"
    >
      {type === "nominatelist" && (
        <>
          <button
            className="ctrl-btn"
          >
            <i
              className="fa-fw fa fa-times"
              onClick={() => removeMovieFromNominatelist(info.imdbID)}
            ></i>
          </button>
        </>
      )}
    </div>
  );
};
