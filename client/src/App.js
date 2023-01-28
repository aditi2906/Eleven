import "./App.css";
import Puzzle from "./Components/Exercises/SliderPuzzle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/puzzle" element={<Puzzle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
