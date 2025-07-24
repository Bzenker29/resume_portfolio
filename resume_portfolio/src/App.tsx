import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Experience from "./screens/Experience";
import Projects from "./screens/Projects";
import Resume from "./screens/Resume";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="root">
        <Navbar />

        {/* Main content area for switching pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
