import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import SliderPuzzle from "./Components/Exercises/SliderPuzzle";
import CardGame from "./Components/Exercises/CardGame";
import OpenCV from "./Components/openCv/OpenCV";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {console.log("hello app")}
          <Route path="/" element={<Dashboard />} />
          <Route path="/puzzle" element={<SliderPuzzle />} />
          <Route
            path="/memory"
            element={
              <div style={{ height: "100vh", backgroundColor: "#F2CD5C" }}>
                <CardGame level={1} />
              </div>
            }
          />
          <Route path="/opencv" element={<OpenCV />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
