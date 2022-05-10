import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { useTimer } from "use-timer";
import { useModal } from "react-hooks-use-modal";
import { ToastContainer, toast } from "react-toastify";
import AnswerList from "../components/AnswerList";
import Poster from "../components/Poster";
import { useApiCalls } from "../context/ApiCallsContext";
import movieCatalog from "../datas/movieCatalog";
import "react-toastify/dist/ReactToastify.css";

export default function Play() {
  const { movie, pickMovie, postUser } = useApiCalls();
  const username = useRef();
  const [count, setCount] = useState(1);
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

  const [isUsernameSubmitted, setIsUsernameSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsUsernameSubmitted(true);
    postUser(username.current.value);
    toast.success(
      `Thanks ${username.current.value}, your score is submitted!`,
      {
        position: toast.POSITION.BOTTOM_CENTER,
      }
    );
  };

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
        <p className="infos">{time < 10 ? `⏱️ 0${time}` : `⏱️ ${time}`}</p>
        <p className="infos central">{count} / 5</p>
        <p className="infos">{score}</p>
      </div>
      {movie && (
        <div className="desktop-flex">
          <div className="frame">
            <Poster
              poster={movie.poster_path}
              title={movie.title}
              isAnswerActive={isAnswerActive}
            />
            <button
              type="button"
              onClick={isAnswerActive ? nextLevel : null}
              className={isAnswerActive ? "now-showing next" : "now-showing"}
            >
              {isAnswerActive ? "NEXT" : "NOW SHOWING"}
            </button>
          </div>
          <div className="answers">
            <AnswerList
              answersArray={movie.answers}
              isAnswerActive={isAnswerActive}
              setIsAnswerActive={setIsAnswerActive}
              activateAnswer={activateAnswer}
            />
          </div>
        </div>
      )}
      <Modal>
        <div className="modal">
          <p>{score} / 75</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Save your score:{" "}
              <input
                id="username"
                type="text"
                placeholder="Enter your name"
                ref={username}
              />
            </label>
            <input
              type="submit"
              value="submit"
              disabled={!!isUsernameSubmitted}
            />
          </form>
          <Link to="/">Back To The Menu</Link>
          <ToastContainer />
        </div>
      </Modal>
    </div>
  );
}
