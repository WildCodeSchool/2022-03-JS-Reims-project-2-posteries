import PropTypes from "prop-types";
import { useState } from "react";

function Poster({ poster, title }) {
  const [isActive, setActive] = useState(false);

  const activate = () => {
    setActive(true);
  };

  return (
    <div
      className="centralPoster"
      onKeyPress={activate}
      onClick={activate}
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
