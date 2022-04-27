import PropTypes from "prop-types";

function Category({ category }) {
  return <li className="category">{category}</li>;
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Category;
