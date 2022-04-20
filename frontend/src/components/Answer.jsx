import PropTypes from "prop-types";
import { useState } from "react";

function Answer({ title, res }) {
  const [isActive, setActive] = useState(false);

  const ToggleClass = () => {
    setActive(true);
  };

  function resultStyle() {
    if (isActive) {
      if (res === true) {
        return "good-answer";
      }
      return "wrong-answer";
    }
    return "answer";
  }

  return (
    <button type="submit" onClick={ToggleClass} className={resultStyle()}>
      {title}
    </button>
  );
}

Answer.propTypes = {
  title: PropTypes.string.isRequired,
  res: PropTypes.bool.isRequired,
};

export default Answer;
