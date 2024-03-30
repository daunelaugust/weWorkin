import "./App.css";
import AddProject from "./AddProjects/AddProject.jsx";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import HomePage from "./HomePage.js"; // Import the HomePage component
import LoginPage from "./pages/LoginPage.js";

function App() {
  return (
    <div className="App">
      <nav className="topnav">
        <ul className="link_list" style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/"> Home </Link>
            <Link to="/AddProject"> Add Project </Link>
            <Link to="/Projects"> Search Projects </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        {/* Render HomePage component for the "/" route */}
        <Route path="/addproject" element={<AddProject />} />
        <Route path="/loginpage" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
