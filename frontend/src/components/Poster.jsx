import PropTypes from "prop-types";

function Poster({ poster, title }) {
  return <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt={title} />;
}

Poster.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Poster;
