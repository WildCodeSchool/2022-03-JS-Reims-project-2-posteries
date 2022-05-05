import axios from "axios";
import { useState, useEffect } from "react";
import CategoryList from "../components/CategoryList";

function Welcome() {
  const [scores, setScores] = useState([]);
  const getScores = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/scores/`
      )
      .then((response) => response.data)
      .then((data) => {
        const [first, second, third] = data.sort(
          (a, b) => b.userscore - a.userscore
        );
        setScores([first, second, third]);
      });
  };

  useEffect(getScores, []);

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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={score.id}>
              <td>{score.username}</td>
              <td>{score.userscore}</td>
              <td>{index + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div />
    </div>
  );
}

export default Welcome;
