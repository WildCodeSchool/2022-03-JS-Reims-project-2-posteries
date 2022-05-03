import { createContext, useState, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const ApiCallsContext = createContext();

export default ApiCallsContext;

export function ApiCallsContextProvider({ children }) {
  const [movie, setMovie] = useState();
  const [falseMovie1, setFalseMovie1] = useState();
  const [falseMovie2, setFalseMovie2] = useState();
  const [falseMovie3, setFalseMovie3] = useState();

  function getMovies(movieIdArray) {
    movieIdArray.sort(() => Math.random() - 0.5);

    setMovie();
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieIdArray[0]}?api_key=df8d2d90ff4e6f4a0f1e460dda3a4a35`
      )
      .then((resp) => resp.data)
      .then((data) => setMovie(data));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieIdArray[1]}?api_key=df8d2d90ff4e6f4a0f1e460dda3a4a35`
      )
      .then((resp) => resp.data)
      .then((data) => setFalseMovie1(data));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieIdArray[2]}?api_key=df8d2d90ff4e6f4a0f1e460dda3a4a35`
      )
      .then((resp) => resp.data)
      .then((data) => setFalseMovie2(data));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieIdArray[3]}?api_key=df8d2d90ff4e6f4a0f1e460dda3a4a35`
      )
      .then((resp) => resp.data)
      .then((data) => setFalseMovie3(data));
  }

  return (
    <ApiCallsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        movie,
        falseMovie1,
        falseMovie2,
        falseMovie3,
        getMovies,
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
