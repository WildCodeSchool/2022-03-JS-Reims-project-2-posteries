import { createContext, useState, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const ApiCallsContext = createContext();

export default ApiCallsContext;

export function ApiCallsContextProvider({ children }) {
  const [movie, setMovie] = useState();

  function pickMovie(movieIdArray) {
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
    movieIdArray.splice(0, 4).map((x) => movieIdArray.push(x));
  }

  return (
    <ApiCallsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        movie,
        pickMovie,
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
