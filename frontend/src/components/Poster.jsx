import PropTypes from "prop-types";

function Poster({ poster, title, isAnswerActive }) {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w300${poster}`}
      alt={title}
      className={
        isAnswerActive ? "blur centralPoster" : "no-blur centralPoster"
      }
    />
  );
}

Poster.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isAnswerActive: PropTypes.bool.isRequired,
};

export default Poster;
