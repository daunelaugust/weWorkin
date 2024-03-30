import './App.css';
import AddProject from './AddProjects/AddProject.jsx';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
           <h1>Home Page</h1> 
           <Routes>
            <Route path = '/addproject' element = {<AddProject/>}/>
          </Routes>
    </div>
  );
}

export default App;
