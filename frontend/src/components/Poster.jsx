import PropTypes from "prop-types";
import { useState } from "react";

function Poster({ poster, title }) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(true);
  };

  return (
    <div
      className="centralPoster"
      onKeyPress={toggleClass}
      onClick={toggleClass}
      role="button"
      tabIndex="0"
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${poster}`}
        alt={title}
        className={isActive ? "no-blur" : "blur"}
      />
    </div>
  );
}

Poster.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Poster;
