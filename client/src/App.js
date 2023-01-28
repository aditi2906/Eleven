import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import CardGame from "./Components/Exercises/CardGame";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {console.log("hello app")}
          <Route path="/" element={<Dashboard />} />
          <Route path="/puzzle" element={<CardGame />} />
          <Route path="/cards" element={<CardGame level={1} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
