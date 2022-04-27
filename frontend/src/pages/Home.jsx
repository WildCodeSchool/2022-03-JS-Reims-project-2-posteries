import axios from "axios";
import { useState, useEffect } from "react";
import { useTimer } from "use-timer";
import AnswerList from "../components/AnswerList";
import Poster from "../components/Poster";

const movieIdArray = [
  11, 12, 13, 14, 15, 18, 19, 22, 24, 28, 101, 105, 107, 111, 115, 116, 118,
  120, 128, 129, 146, 153, 161, 162, 170, 272, 329, 406, 429, 500, 524, 550,
  1878, 22538, 27205, 37799, 157336, 313369, 333339, 419430,
];

export default function Home() {
  const [movie, setMovie] = useState();
  const [falseMovie1, setFalseMovie1] = useState();
  const [falseMovie2, setFalseMovie2] = useState();
  const [falseMovie3, setFalseMovie3] = useState();
  const { time, start, reset } = useTimer({
    initialTime: 15,
    timerType: "DECREMENTAL",
    endTime: 0,
  });

  function getMovie() {
    movieIdArray.sort(() => Math.random() - 0.5);

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieIdArray[0]}?api_key=df8d2d90ff4e6f4a0f1e460dda3a4a35`
      )
      .then((resp) => resp.data)
      .then((data) => setMovie(data));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieIdArray[1]}?api_key=df8d2d90ff4e6f4a0f1e460dda3a4a35`
      )
      .then((resp) => resp.data)
      .then((data) => setFalseMovie1(data));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieIdArray[2]}?api_key=df8d2d90ff4e6f4a0f1e460dda3a4a35`
      )
      .then((resp) => resp.data)
      .then((data) => setFalseMovie2(data));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieIdArray[3]}?api_key=df8d2d90ff4e6f4a0f1e460dda3a4a35`
      )
      .then((resp) => resp.data)
      .then((data) => setFalseMovie3(data));
  }

  function nextLevel() {
    setMovie();
    getMovie();
    reset();
    start();
  }

  useEffect(getMovie, []);

  return (
    <>
      <h1>Posteries</h1>
      <div className="timerPoints">
        <p>{time}</p>
        <p>Points</p>
      </div>
      {movie && falseMovie1 && falseMovie2 && falseMovie3 && (
        <>
          <Poster poster={movie.poster_path} title={movie.title} />
          <div className="answers">
            <AnswerList
              title1={movie.title}
              title2={falseMovie1.title}
              title3={falseMovie2.title}
              title4={falseMovie3.title}
            />
          </div>
        </>
      )}
      <button type="button" onClick={nextLevel} className="next">
        Next
      </button>
    </>
  );
}
