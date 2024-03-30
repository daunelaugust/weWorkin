import "./App.css";
import AddProject from "./AddProjects/AddProject.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import HomePage from "./HomePage.js"; // Import the HomePage component
import LoginPage from './pages/LoginPage.js';
import Navbar from "./components/Navbar.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />{" "}
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/loginpage" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
