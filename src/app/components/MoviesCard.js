import React from "react";
import style from "@/app/style/movieCard.module.css";
import Image from "next/image";
import ButtonCard from "./ButtonCard";
const MoviesCard = (data) => {
  const { id, title, synopsis } = data.jawSummary;
  return (
    <React.Fragment>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>

      <div className={style.card}>
        <div className={style.Image}>
          <Image
            src={data.jawSummary.backgroundImage.url}
            alt={title}
            width={200}
            height={200}
          />
        </div>
        <div className={style.heading}>
          <h2 style={{ fontSize: "1.5rem" }}>{title.substring(0,25)}...</h2>
        </div>
        <div className={style.content}>
          <p style={{ fontSize: "1.2rem"}}>{synopsis.slice(0,45)}... </p>
        </div>
        </div>
        <ButtonCard 
          key={id}
          Id={id}/> 
          </div>
    </React.Fragment>
  );
};

export default MoviesCard;
