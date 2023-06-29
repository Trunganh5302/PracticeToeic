import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/home/home";
import Practice from "./page/Practice/practice";
import PracticeLR from "./page/detailPracticeLR/detailPracticeLR";
import Part1 from "./page/part1/part1";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/practice" element={<Practice />} />
          <Route exact path="/practice/listenRead" element={<PracticeLR />} />
          <Route exact path="/practice/part1" element={<Part1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
