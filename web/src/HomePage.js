import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

// import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to weWorkin</h1>
      <h3>
        {" "}
        We know searching for engineering jobs is stressful. Employers expect
        you to have projects beyond school projects. Yes, you could contribute
        to open source projects, but that can be lonely.
      </h3>
      {/* <img
        src="https://png.pngtree.com/png-vector/20190611/ourmid/pngtree-icon-people-group-icon-people-network-connection-people-png-image_1495036.png"
        alt="Stressful job search"
        width="400"
        height="200"
      /> */}
      <h1> Start your journey below </h1>
      <div className="start_here">
        <div className="box">
          <h2>I need dev hours on a project</h2>
          <p>
            You’re a project lead! You should sign up{" "}
            <Link to="/AddProject" style={{ color: "white" }}>
              here
            </Link>{" "}
            to read expectations for a project lead and log your project{" "}
          </p>
        </div>
        <div className="box">
          <h2>I want to contribute code to a project</h2>
          <p>
            You're an apprentice! You should search{" "}
            <Link to="/Projects" style={{ color: "white" }}>
              our projects{" "}
            </Link>{" "}
            to match your needs
          </p>
        </div>
      </div>
    </div>
  );
}
