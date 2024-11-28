import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import Calculator from "./Calculator"; // Rename your current App to Calculator
import SupportPage from "./SupportPage"; // Import Support Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
