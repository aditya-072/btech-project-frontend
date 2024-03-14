import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import DiabetesPrediction from "./DiabetesPrediction";
import ParkinsonPrediction from "./ParkinsonPrediction";
import HeartDiseasePrediction from "./HeartDiseasePrediction";

function App() {
  return (
    <Router>
      <div className="App" style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route path="/diabetes" element={<DiabetesPrediction />} />
          <Route path="/parkinson" element={<ParkinsonPrediction />} />
          <Route path="/heart" element={<HeartDiseasePrediction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
