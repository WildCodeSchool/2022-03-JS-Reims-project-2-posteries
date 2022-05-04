import PropTypes from "prop-types";

function Answer({ title, isAnswerActive, res, activateAnswer }) {
  function resultStyle() {
    if (isAnswerActive) {
      if (res === true) {
        return "answer good-answer";
      }
      return "answer wrong-answer";
    }
    return "answer";
  }

  return (
    <button type="submit" onClick={activateAnswer} className={resultStyle()}>
      {title}
    </button>
  );
}

Answer.propTypes = {
  title: PropTypes.string.isRequired,
  activateAnswer: PropTypes.func.isRequired,
  isAnswerActive: PropTypes.bool.isRequired,
  res: PropTypes.bool.isRequired,
};

export default Answer;
