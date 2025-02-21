import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rule from "./pages/Rule";
import Quiz from "./pages/Quiz";
import History from "./pages/History";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rule" element={<Rule />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
