import './App.css';
import AddProject from './AddProjects/AddProject.jsx';
import LoginPage from './pages/LoginPage.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Home Page</h1> 
      <Routes>
        <Route path = '/addproject' element = {<AddProject/>}/>
        <Route path = '/loginpage' element = {<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
