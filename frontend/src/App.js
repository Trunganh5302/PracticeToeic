import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/home/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
