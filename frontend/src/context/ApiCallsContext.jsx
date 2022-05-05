import { createContext, useState, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const ApiCallsContext = createContext();

export default ApiCallsContext;

export function ApiCallsContextProvider({ children }) {
  const [movie, setMovie] = useState();

  function pickMovie(movieIdArray) {
    movieIdArray.sort(() => Math.random() - 0.5);

    setMovie();
    Promise.all([
      axios.get(
        `https://api.themoviedb.org/3/movie/${movieIdArray[0]}?api_key=df8d2d90ff4e6f4a0f1e460dda3a4a35`
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/${movieIdArray[1]}?api_key=df8d2d90ff4e6f4a0f1e460dda3a4a35`
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/${movieIdArray[2]}?api_key=df8d2d90ff4e6f4a0f1e460dda3a4a35`
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/${movieIdArray[3]}?api_key=df8d2d90ff4e6f4a0f1e460dda3a4a35`
      ),
    ]).then((responses) => {
      const responsesData = responses.map((response) => response.data);
      setMovie({
        ...responsesData[0],
        answers: responsesData
          .map(({ id, title }, index) => ({
            title,
            res: index === 0,
            id,
          }))
          .sort(() => Math.random() - 0.5),
      });
    });
  }
  const [username, setUsername] = useState("");
  const [score, setScore] = useState(0);
  const postUser = () => {
    axios
      .post(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/scores/`,
        {
          username,
          userscore: score,
        }
      )
      .then((response) => response);
  };

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

  return (
    <ApiCallsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        movie,
        pickMovie,
        postUser,
        score,
        setScore,
        username,
        setUsername,
        scores,
        getScores,
      }}
    >
      {children}
    </ApiCallsContext.Provider>
  );
}

export const useApiCalls = () => useContext(ApiCallsContext);

ApiCallsContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
