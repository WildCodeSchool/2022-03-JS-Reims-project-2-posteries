import CategoryList from "../components/CategoryList";

function Welcome() {
  return (
    <div className="welcome">
      <h1>PoSteries</h1>
      <h2 className="presentation">
        Hello everybody! You wanna play? Choose a category. See a movie poster.
        Guess its title. <br /> GLHF!
      </h2>
      <ul className="category-list">
        <CategoryList />
      </ul>
    </div>
  );
}

export default Welcome;
