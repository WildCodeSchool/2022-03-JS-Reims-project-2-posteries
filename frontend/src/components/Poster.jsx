import PropTypes from "prop-types";

function Poster({ poster, title }) {
  return (
    <div className="centralPoster">
      <img
        src={`https://image.tmdb.org/t/p/w300${poster}`}
        alt={title}
        className="no-blur"
      />
    </div>
  );
}

Poster.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Poster;
