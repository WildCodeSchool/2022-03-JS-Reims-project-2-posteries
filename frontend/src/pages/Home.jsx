import axios from "axios";
import { useState, useEffect } from "react";
import AnswerList from "../components/AnswerList";
import Poster from "../components/Poster";

export default function Home() {
  const [movie, setMovie] = useState([]);

  function getMovie() {
    const movieIdArray = [
      11, 19, 105, 120, 129, 272, 329, 406, 429, 500, 524, 550, 1878, 22538,
      27205, 37799, 157336, 313369, 333339, 419430,
    ];

    const randomMovie =
      movieIdArray[Math.floor(Math.random() * movieIdArray.length)];

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=df8d2d90ff4e6f4a0f1e460dda3a4a35`
      )
      .then((resp) => resp.data)
      .then((data) => setMovie(data));
  }

  useEffect(getMovie, []);

  return (
    <>
      <h1>Posteries</h1>
      <div className="timerPoints">
        <p>Timer</p>
        <p>Points</p>
      </div>
      <Poster poster={movie.poster_path} title={movie.original_title} />
      <div className="answers">
        <AnswerList />
      </div>
    </>
  );
}
