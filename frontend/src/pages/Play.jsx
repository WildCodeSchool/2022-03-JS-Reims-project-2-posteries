import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTimer } from "use-timer";
import AnswerList from "../components/AnswerList";
import Poster from "../components/Poster";

const movieCatalog = {
  "Science Fiction": [
    105, 329, 157336, 11, 335984, 333339, 62, 49047, 603, 19, 75612, 18, 152601,
    70160, 97, 27205, 264660, 137113, 19995, 10681, 286217, 869, 152, 74, 601,
    6479, 97370, 9693, 329865, 68,
  ],
  Drama: [
    76203, 13, 14, 492188, 44214, 210577, 376867, 264644, 70, 25793, 773,
    426426, 12405, 313365, 9800, 489, 393457, 103, 597, 1443, 142, 244786, 462,
    71, 389015, 359940, 505192, 424, 398818, 334541,
  ],
  Horror: [
    2291, 419430, 694, 794803, 250546, 138843, 503919, 938625, 346364, 396535,
    565, 2667, 9792, 313922, 418078, 1933, 9003, 176, 571, 242224, 22970,
    447332, 23827, 11906, 270303, 8329, 310131, 170, 348, 1091,
  ],
  Comedy: [
    680, 4638, 747, 544, 962, 854, 9428, 39513, 9013, 788, 4247, 862, 18785,
    72105, 9398, 1621, 57214, 115, 496, 620, 762, 137, 703, 813, 11031, 8363,
    90, 771, 2005, 957,
  ],
};

export default function Play() {
  const [movie, setMovie] = useState();
  const [falseMovie1, setFalseMovie1] = useState();
  const [falseMovie2, setFalseMovie2] = useState();
  const [falseMovie3, setFalseMovie3] = useState();
  const { category } = useParams();
  const movieIdArray = movieCatalog[category];
  const { time, start, reset } = useTimer({
    initialTime: 15,
    timerType: "DECREMENTAL",
    endTime: 0,
  });

  function getMovie() {
    movieIdArray.sort(() => Math.random() - 0.5);

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

  function nextLevel() {
    setMovie();
    getMovie();
    reset();
    start();
  }

  useEffect(getMovie, []);

  return (
    <>
      <h1>Posteries</h1>
      <div className="timerPoints">
        <p>{time}</p>
        <p>Points</p>
      </div>
      {movie && falseMovie1 && falseMovie2 && falseMovie3 && (
        <>
          <Poster poster={movie.poster_path} title={movie.title} />
          <div className="answers">
            <AnswerList
              title1={movie.title}
              title2={falseMovie1.title}
              title3={falseMovie2.title}
              title4={falseMovie3.title}
            />
          </div>
        </>
      )}
      <button type="button" onClick={nextLevel} className="next">
        Next
      </button>
    </>
  );
}
