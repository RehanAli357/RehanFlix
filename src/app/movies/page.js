import React from "react";
import MoviesCard from "../components/MoviesCard";
 
const Movie = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
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
  const mainData = data.titles;

  return (
    <React.Fragment>
      <h1 style={{textAlign:"center",margin:"0.4em 0"}}>Movies Page</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {mainData.map((data) => {
          return (
            <React.Fragment>
              <MoviesCard key={data.id} {...data} />
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Movie;
