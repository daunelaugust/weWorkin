import "./App.css";
import AddProject from "./AddProjects/AddProject.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import HomePage from "./HomePage.js"; // Import the HomePage component
import LoginPage from './pages/LoginPage.js';
import Navbar from "./components/Navbar.js";
import Projects from './Projects/Projects.jsx'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />{" "}
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path ='/projects'element={<Projects />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
