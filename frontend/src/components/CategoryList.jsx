import { Link } from "react-router-dom";

const categoryArray = [
  {
    category: "Drama",
    id: 1,
  },
  {
    category: "Science Fiction",
    id: 2,
  },
  {
    category: "Fantasy",
    id: 3,
  },
  {
    category: "Horror",
    id: 4,
  },
];

function CategoryList() {
  return categoryArray.map((data) => (
    <li className="category-item" key={data.id}>
      <Link className="category" to={`/play/${data.category}`}>
        {data.category}
      </Link>
    </li>
  ));
}

export default CategoryList;
