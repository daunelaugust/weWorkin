import "./App.css";
import AddProject from "./AddProjects/AddProject.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.js"; // Import the HomePage component

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        {/* Render HomePage component for the "/" route */}
        <Route path="/addproject" element={<AddProject />} />
      </Routes>
    </div>
  );
}

export default App;
