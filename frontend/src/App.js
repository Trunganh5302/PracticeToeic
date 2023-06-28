import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/home/home";
import Practice from "./page/Practice/practice";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/practice" element={<Practice />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
