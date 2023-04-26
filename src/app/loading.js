import React from "react";
import style from "@/app/style/loding.module.css";
const loading = () => {
  return (
    <React.Fragment>
      <div className={style.Loading}>
        <b style={{color:"white",fontSize:"5rem"}}>Loading...</b>
      </div>
    </React.Fragment>
  );
};

export default loading;
