import PropTypes from "prop-types";

function Answer({ title, res }) {
  return (
    <button
      type="submit"
      className="answer"
      onClick={
        res
          ? () => window.alert("Bonne réponse !")
          : () => window.alert("Mauvaise réponse !")
      }
    >
      {title}
    </button>
  );
}

Answer.propTypes = {
  title: PropTypes.string.isRequired,
  res: PropTypes.bool.isRequired,
};

export default Answer;
