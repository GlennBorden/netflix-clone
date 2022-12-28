import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setInterval(fetchData, 3000);
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // get a random from random and use it to get a random image from the results
      const randomNumber = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      // setInterval(setMovie, 3000);
      setMovie(request.data.results[randomNumber]);
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner backdrop-brightness-100 relative"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {" "}
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
