import Category from "./Category";

function CategoryList() {
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

  return categoryArray.map((data) => (
    <Category category={data.category} key={data.id} />
  ));
}

export default CategoryList;
