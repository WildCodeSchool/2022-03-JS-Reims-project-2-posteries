import axios from "axios";
import { useState, useEffect } from "react";
import Answer from "../components/Answer";
import Poster from "../components/Poster";

export default function Home() {
  const [movie, setMovie] = useState([]);

  function getMovie() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/157336?api_key=df8d2d90ff4e6f4a0f1e460dda3a4a35`
      )
      .then((resp) => resp.data)
      .then((data) => setMovie(data));
  }

  useEffect(getMovie, []);

  return (
    <>
      <div className="timerPoints">
        <p>Timer</p>
        <p>Points</p>
      </div>
      <h1>Posteries</h1>
      <Poster poster={movie.poster_path} title={movie.original_title} />
      <div className="answers">
        <Answer title={movie.original_title} movie={movie} res />
        <Answer title="Mary à tout prix" movie={movie} res={false} />
        <Answer title="Les dix commandements" movie={movie} res={false} />
        <Answer title="Ponyo sur la falaise" movie={movie} res={false} />
      </div>
    </>
  );
}
