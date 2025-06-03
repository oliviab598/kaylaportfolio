import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import EnterPage from "./components/EnterPage";
import RoomExePage from "./components/RoomExePage";
import CollabsPage from "./components/CollabsPage";
import SheOnlyPage from "./components/SheOnlyPage";
import ToughToTalkPage from "./components/TouchToTalkPage";
import SoMuchPage from "./components/SoMuchPage";

function App() {
  return (
    <Router basename="/kaylaportfolio">
      <Routes>
        <Route path="/" element={<EnterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/room-exe" element={<RoomExePage />} />
        <Route path="/collabs" element={<CollabsPage />} />
        <Route path="/she-only" element={<SheOnlyPage />} />
        <Route path="/tough-to-talk" element={<ToughToTalkPage />} />
        <Route path="/so-much" element={<SoMuchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
