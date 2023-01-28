import "./App.css";
import Puzzle from "./Components/Exercises/SliderPuzzle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import CardGame from "./Components/Exercises/CardGame";
import OpenCV from "./Components/openCv/OpenCV";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/puzzle" element={<Puzzle />} />
          <Route path="/cards" element={<CardGame level={1} />} />
          <Route path="/opencv" element={<OpenCV />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
