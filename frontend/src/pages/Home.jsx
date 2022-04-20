import axios from "axios";
import { useState, useEffect } from "react";
import Answer from "../components/Answer";
import Poster from "../components/Poster";

export default function Home() {
  const [movie, setMovie] = useState();
  const [falseMovie, setFalseMovie] = useState();
  const movieIdArray = [
    11, 19, 105, 120, 129, 272, 329, 406, 429, 500, 524, 550, 1878, 22538,
    27205, 37799, 157336, 313369, 333339, 419430,
  ];

  const [movieId, setMovieId] = useState(
    movieIdArray[Math.floor(Math.random() * movieIdArray.length)]
  );

  function pickRandomMovieId() {
    setMovieId(movieIdArray[Math.floor(Math.random() * movieIdArray.length)]);
  }

  function getMovie() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=df8d2d90ff4e6f4a0f1e460dda3a4a35`
      )
      .then((resp) => resp.data)
      .then((data) => setMovie(data));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=df8d2d90ff4e6f4a0f1e460dda3a4a35`
      )
      .then((resp) => resp.data)
      .then((data) => setFalseMovie(data));
  }

  function nextLevel() {
    pickRandomMovieId();
  }

  useEffect(getMovie, [movieId]);

  return (
    <>
      <h1>Posteries</h1>
      <div className="timerPoints">
        <p>Timer</p>
        <p>Points</p>
      </div>
      <h1>Posteries</h1>
      {movie && falseMovie && (
        <>
          <Poster poster={movie.poster_path} title={movie.original_title} />
          <div className="answers">
            <Answer title={movie.original_title} movie={movie} res />
            <Answer
              title={falseMovie.original_title}
              movie={movie}
              res={false}
            />
            <Answer
              title={falseMovie.original_title}
              movie={movie}
              res={false}
            />
            <Answer
              title={falseMovie.original_title}
              movie={movie}
              res={false}
            />
          </div>
        </>
      )}
      <button type="button" onClick={nextLevel}>
        NEXT QUESTION
      </button>
    </>
  );
}
