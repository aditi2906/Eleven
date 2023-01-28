import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import CardGame from "./Components/Exercises/CardGame";
import SliderPuzzle from "./Components/Exercises/SliderPuzzle";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {console.log("hello app")}
          <Route path="/" element={<Dashboard />} />
          <Route path="/puzzle" element={<SliderPuzzle />} />
          <Route
            path="/cards"
            element={
              <div style={{ height: "100vh", backgroundColor: "#F2CD5C" }}>
                <CardGame level={1} />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
