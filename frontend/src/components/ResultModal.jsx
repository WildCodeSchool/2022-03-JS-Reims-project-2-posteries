import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ResultModal({ score, handleSubmit, username, isUsernameSubmitted }) {
  return (
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
        <input type="submit" value="submit" disabled={!!isUsernameSubmitted} />
      </form>
      <Link to="/">Back To The Menu</Link>
      <ToastContainer />
    </div>
  );
}

ResultModal.propTypes = {
  score: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  isUsernameSubmitted: PropTypes.bool.isRequired,
};

export default ResultModal;
