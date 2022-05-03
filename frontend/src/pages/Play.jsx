import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTimer } from "use-timer";
import movieCatalog from "../datas/movieCatalog";
import AnswerList from "../components/AnswerList";
import Poster from "../components/Poster";

export default function Play() {
  const [movie, setMovie] = useState();
  const [falseMovie1, setFalseMovie1] = useState();
  const [falseMovie2, setFalseMovie2] = useState();
  const [falseMovie3, setFalseMovie3] = useState();
  const { category } = useParams();
  const movieIdArray = movieCatalog[category];
  const { time, start, reset, pause } = useTimer({
    initialTime: 15,
    timerType: "DECREMENTAL",
    endTime: 0,
    autostart: true,
  });

  const [isAnswerActive, setIsAnswerActive] = useState(false);

  useEffect(() => {
    if (isAnswerActive === false) {
      start();
    }
    return () => pause();
  }, [isAnswerActive]);

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
    setIsAnswerActive(false);
  }

  useEffect(getMovie, []);

  return (
    <div className="play">
      <h1>Posteries</h1>
      <div className="timerPoints">
        {time < 10 ? <p>⏱️ 0{time}</p> : <p>⏱️ {time}</p>}
        <p>Points</p>
      </div>
      {movie && falseMovie1 && falseMovie2 && falseMovie3 && (
        <>
          <Poster
            poster={movie.poster_path}
            title={movie.title}
            isAnswerActive={isAnswerActive}
          />
          <div className="answers">
            <AnswerList
              title1={movie.title}
              title2={falseMovie1.title}
              title3={falseMovie2.title}
              title4={falseMovie3.title}
              isAnswerActive={isAnswerActive}
              setIsAnswerActive={setIsAnswerActive}
            />
          </div>
        </>
      )}
      <button type="button" onClick={nextLevel} className="next">
        Next
      </button>
    </div>
  );
}
