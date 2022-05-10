import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome";
import Play from "./pages/Play";
import Scoreboard from "./pages/Scoreboard";
import { ApiCallsContextProvider } from "./context/ApiCallsContext";

function App() {
  return (
    <ApiCallsContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/play/:category" element={<Play />} />
          <Route path="/scores" element={<Scoreboard />} />
        </Routes>
      </Router>
    </ApiCallsContextProvider>
  );
}

export default App;
