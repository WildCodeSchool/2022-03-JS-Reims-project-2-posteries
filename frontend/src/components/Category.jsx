import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Category({ category }) {
  return (
    <li className="category">
      <Link to="/game" element={category}>
        {category}
      </Link>
    </li>
  );
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Category;
