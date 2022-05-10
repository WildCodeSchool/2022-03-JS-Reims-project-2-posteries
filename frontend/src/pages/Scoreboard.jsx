import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useApiCalls } from "../context/ApiCallsContext";

function Scoreboard() {
  const { scores, getScores } = useApiCalls();

  useEffect(getScores, []);

  return (
    <div className="welcome">
      <h1>PoSteries</h1>
      <h3>High Scores</h3>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={score.id}>
              <td>{index + 1}</td>
              <td>{score.username}</td>
              <td>{score.userscore}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="category scoreboard" to="/">
        Back to the menu
      </Link>
    </div>
  );
}

export default Scoreboard;
