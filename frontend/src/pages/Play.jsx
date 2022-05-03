import { useMemo, useState, useEffect } from "react";
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

  const { movie, falseMovie1, falseMovie2, falseMovie3, getMovies } =
    useApiCalls();

  const [isAnswerActive, setIsAnswerActive] = useState(false);

  useEffect(() => {
    if (isAnswerActive === false) {
      start();
    }
    return () => pause();
  }, [isAnswerActive]);

  function nextLevel() {
    getMovies(movieIdArray);
    reset();
    start();
    setIsAnswerActive(false);
  }

  useEffect(() => {
    getMovies(movieIdArray);
  }, []);

  const answersArray = useMemo(
    () =>
      [
        {
          title: movie?.title,
          res: true,
          id: 1,
        },
        {
          title: falseMovie1?.title,
          res: false,
          id: 2,
        },
        {
          title: falseMovie2?.title,
          res: false,
          id: 3,
        },
        {
          title: falseMovie3?.title,
          res: false,
          id: 4,
        },
      ].sort(() => Math.random() - 0.5),
    [movie, falseMovie1, falseMovie2, falseMovie3]
  );

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
              answersArray={answersArray}
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
