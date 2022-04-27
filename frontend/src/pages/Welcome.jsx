import CategoryList from "../components/CategoryList";

function Welcome() {
  return (
    <div className="welcome">
      <h1>PoSteries</h1>
      <p className="presentation">
        Hello everybody! You wanna play? Choose a category. See a movie poster.
        Guess its title. <br/> GLHF!
      </p>
      <ul>
        <CategoryList />
      </ul>
    </div>
  );
}

export default Welcome;
