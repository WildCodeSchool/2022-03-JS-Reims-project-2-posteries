import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { useApiCalls } from "../context/ApiCallsContext";

function ResultModal({ score }) {
  const username = useRef();
  const [isUsernameSubmitted, setIsUsernameSubmitted] = useState(false);
  const { postUser } = useApiCalls();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsUsernameSubmitted(true);
    postUser(username.current.value, score);
    toast.success(
      `Thanks ${username.current.value}, your score is submitted!`,
      {
        position: toast.POSITION.BOTTOM_CENTER,
      }
    );
  };

  return (
    <div className="modal">
      <p>{score} / 75</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Save your score: <br />
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
          className="scoreboard"
        />
      </form>
      <Link to="/">Back To The Menu</Link>
      <ToastContainer />
    </div>
  );
}
ResultModal.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ResultModal;
