import React, { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";

export const Controller = ({ info, type }) => {
  const { removeMovieFromNominatelist } = useContext(GlobalContext);
  return (
    <div
      className="inner-card-controls"
      // style={{
      //   display: "inline",
      //   backgroundColor: "red",
      //   position: "absolute",
      //   bottom: "20px",
      //   left: "50px",
      //   transform: "translateX(-50%)",
      //   background: "black",
      //   borderRadius: "5px",
      //   padding: "3px",
      //   opacity: "0",
      //   transition: "all 0.3s ease",
      //   "&:hover": {
      //     opacity: "1",
      //   },
      // }}
    >
      {type === "nominatelist" && (
        <>
          <button
            className="ctrl-btn"
            // style={{
            //   color: "white",
            //   backgroundColor: "transparent",
            //   border: "none",
            //   transition: "all 0.3s ease",
            //   fontSize: "1.25rem",
            //   padding: "5px",
            //   margin: "0",
            //   "&:hover": {
            //     color: "green",
            //     cursor: "pointer",
            //   },
            // }}
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
