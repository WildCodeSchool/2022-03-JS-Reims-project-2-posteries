import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import "./App.css";
import Play from "./pages/Play";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/play/:category" element={<Play />} />
      </Routes>
    </Router>
  );
}

export default App;
