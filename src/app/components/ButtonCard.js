import React from "react";

import Link from "next/link";
import style from "@/app/style/movieCard.module.css"
const ButtonCard = ({ Id }) => {
  return (
    <React.Fragment>
      <div className={style.btn}>
        <Link href={`/movies/${Id}`}>
          <button
            style={{
              fontSize:"1.2rem",
              marginLeft:"1.5em",
              marginTop:"1em",
              top:-40,
              position:"relative",
              zIndex:1,
              backgroundColor:"black",
              color:"aliceblue",
              border:"none",
              padding:"0.2em 1em",
              cursor:"pointer"
            }}
          >
            Read More
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ButtonCard;
