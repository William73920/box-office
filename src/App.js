import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Starred from "./pages/Starred";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="*" element={<h1>404 Page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
