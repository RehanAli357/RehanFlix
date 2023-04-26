import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "@/app/style/movieDetails.module.css";
const page = async ({ params }) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "8dc5da3cbfmsh8e8e9218d73ca15p14be8cjsn2e4616bf2564",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const mainData = data[0].details;
  return (
    <React.Fragment>
      <div className={style.card}>
        <b className={style.Type}>Type/<span>{mainData.type.toUpperCase()}</span></b>
        <h2 className={style.heading}>{mainData.title}</h2>
        <Image
          src={mainData.backgroundImage.url}
          alt={mainData.title}
          width={400}
          height={400}
        />
        <p className={style.para}>{mainData.synopsis}.</p>
        <Link href="/movies">
          <button>Explore More Movies</button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default page;
