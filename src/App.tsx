import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import EnterPage from "./components/EnterPage";

function App() {
  return (
    <Router basename="/kaylaportfolio">
      <Routes>
        <Route path="/" element={<EnterPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
