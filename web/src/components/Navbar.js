import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return(
        <div className="nav-container">
            <nav>
                <div className="nav-title">
                    <p><Link to="/">weWorkin</Link></p>
                </div>
                <div className="nav-list">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/AddProject">Add Project</Link></li>
                        <li><Link to="/Projects">Search Project</Link></li>
                        <li><Link to="/LoginPage">Login Page</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;