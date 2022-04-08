import PropTypes from "prop-types";

function Answer({ name }) {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

Answer.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Answer;
