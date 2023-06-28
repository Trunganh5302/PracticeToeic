import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/home/home";
import Practice from "./page/Practice/practice";
import PracticeLR from "./page/detailPracticeLR/detailPracticeLR";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/practice" element={<Practice />} />
          <Route exact path="/practice/listenRead" element={<PracticeLR />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
