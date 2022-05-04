import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTimer } from "use-timer";
import { useModal } from "react-hooks-use-modal";
import AnswerList from "../components/AnswerList";
import Poster from "../components/Poster";
import { useApiCalls } from "../context/ApiCallsContext";
import movieCatalog from "../datas/movieCatalog";

export default function Play() {
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(1);
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

  const { movie, pickMovie } = useApiCalls();

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
    if (count === 5) {
      open();
    }
  };

  function nextLevel() {
    pickMovie(movieIdArray);
    setCount(count + 1);
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
        <p>{time < 10 ? `⏱️ 0${time}` : `⏱️ ${time}`}</p>
        <p>{score}</p>
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
              activateAnswer={activateAnswer}
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
      <Modal>
        <div className="modal">
          <p>Salut</p>
          <Link to="/">Catégories</Link>
        </div>
      </Modal>
    </div>
  );
}
