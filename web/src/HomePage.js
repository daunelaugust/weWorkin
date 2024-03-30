import React from "react";
import "./HomePage.css";

// import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to weWorkin!</h1>
      <h3>
        {" "}
        We know searching for engineering jobs is stressful. Employers are
        starting to expect you to have projects beyond school projects.
      </h3>
      <img
        src="https://news.fordham.edu/wp-content/uploads/2021/01/Student-Stress.jpg"
        alt="Stressful job search"
        width="400"
        height="200"
      />
      <h1> Start your journey below </h1>
      <div className="start_here">
        <div className="user_flow">
          <h2>I need dev hours on a project</h2>
          <p>
            You’re a project lead! You should sign up here to read expectations
            for a project lead and log your project{" "}
          </p>
        </div>
        <div>
          <h2>I want to contribute code to a project!</h2>
          <p>
            Great, you're an apprentice! You should search our projects to match
            your needs
          </p>
        </div>
      </div>
    </div>
  );
}
