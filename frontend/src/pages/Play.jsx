import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTimer } from "use-timer";
import { useModal } from "react-hooks-use-modal";
import AnswerList from "../components/AnswerList";
import Poster from "../components/Poster";
import ResultModal from "../components/ResultModal";
import { useApiCalls } from "../context/ApiCallsContext";
import movieCatalog from "../datas/movieCatalog";

export default function Play() {
  const { movie, pickMovie } = useApiCalls();
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const { category } = useParams();
  const movieIdArray = movieCatalog[category];

  const { time, start, reset, pause } = useTimer({
    initialTime: 15,
    timerType: "DECREMENTAL",
    endTime: 0,
    autostart: true,
  });
  const [Modal, open] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });

  const [isAnswerActive, setIsAnswerActive] = useState(false);

  useEffect(() => {
    if (isAnswerActive === false) {
      start();
    }
    return () => pause();
  }, [isAnswerActive]);

  const activateAnswer = (isValid) => {
    setIsAnswerActive(true);
    if (isValid) {
      setScore(score + time);
    }
    if (count === 4) {
      open();
    }
  };

  function nextLevel() {
    pickMovie(movieIdArray, count + 1);
    setCount(count + 1);
    reset();
    start();
    setIsAnswerActive(false);
  }

  useEffect(() => {
    movieIdArray.sort(() => Math.random() - 0.5);
    pickMovie(movieIdArray, count);
  }, []);

  return (
    <div className="play">
      <Link className="title-link" to="/">
        <h1>Posteries</h1>
      </Link>
      <div className="timerPoints">
        <p className="infos">{time < 10 ? `⏱️ 0${time}` : `⏱️ ${time}`}</p>
        <p className="infos central">{count + 1} / 5</p>
        <p className="infos">{score} pts</p>
      </div>
      {movie && (
        <div className="desktop-flex">
          <div className="frame">
            <button
              type="button"
              onClick={isAnswerActive || time === 0 ? nextLevel : null}
              className={
                isAnswerActive || time === 0
                  ? "now-showing next"
                  : "now-showing"
              }
            >
              {isAnswerActive || time === 0 ? "NEXT" : "NOW SHOWING"}
            </button>
            <Poster
              poster={movie.poster_path}
              title={movie.title}
              isAnswerActive={isAnswerActive}
            />
          </div>
          <div className="answers">
            <AnswerList
              answersArray={movie.answers}
              isAnswerActive={isAnswerActive || time === 0}
              setIsAnswerActive={setIsAnswerActive}
              activateAnswer={activateAnswer}
            />
          </div>
        </div>
      )}
      <Modal>
        <ResultModal score={score} />
      </Modal>
    </div>
  );
}
