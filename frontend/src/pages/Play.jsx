import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTimer } from "use-timer";
import AnswerList from "../components/AnswerList";
import Poster from "../components/Poster";
import { useApiCalls } from "../context/ApiCallsContext";
import movieCatalog from "../datas/movieCatalog";

export default function Play() {
  const { category } = useParams();
  const movieIdArray = movieCatalog[category];

  const { time, start, reset, pause } = useTimer({
    initialTime: 15,
    timerType: "DECREMENTAL",
    endTime: 0,
    autostart: true,
  });

  const { movie, pickMovie } = useApiCalls();

  const [isAnswerActive, setIsAnswerActive] = useState(false);

  useEffect(() => {
    if (isAnswerActive === false) {
      start();
    }
    return () => pause();
  }, [isAnswerActive]);

  function nextLevel() {
    pickMovie(movieIdArray);
    reset();
    start();
    setIsAnswerActive(false);
  }

  useEffect(() => {
    pickMovie(movieIdArray);
  }, []);

  return (
    <div className="play">
      <h1>Posteries</h1>
      <div className="timerPoints">
        {time < 10 ? <p>⏱️ 0{time}</p> : <p>⏱️ {time}</p>}
        <p>Points</p>
      </div>
      {movie && (
        <>
          <Poster
            poster={movie.poster_path}
            title={movie.title}
            isAnswerActive={isAnswerActive}
          />
          <div className="answers">
            <AnswerList
              answersArray={movie.answers}
              isAnswerActive={isAnswerActive}
              setIsAnswerActive={setIsAnswerActive}
            />
          </div>
        </>
      )}
      <button
        type="button"
        onClick={isAnswerActive ? nextLevel : null}
        className="next"
      >
        {isAnswerActive ? "NEXT" : "NOW SHOWING"}
      </button>
    </div>
  );
}
