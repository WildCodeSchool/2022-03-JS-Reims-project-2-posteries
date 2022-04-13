import PropTypes from "prop-types";

function Answer({ title }) {
  return (
    <button type="submit" className="answer">
      <p>{title}</p>
    </button>
  );
}

Answer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Answer;

/* <button className="answer" onClick={title === movie.original_title ? alert "good answer" : alert "wrong answser"}><p>{title}</p></button> */
