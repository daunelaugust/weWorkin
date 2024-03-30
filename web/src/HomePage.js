import React from "react";
import "./HomePage.css";

// import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to weWorkin!</h1>
      <h1> Start your journey below </h1>
      <h2>I need dev hours on a project</h2>
      <p>
        You’re a project lead! You should sign up here to read expectations for
        a project lead and log your project{" "}
      </p>
      <h2>I want to contribute code to a project!</h2>
      <p>
        Great. You're an apprentice. You should search our projects to match
        your needs
      </p>
    </div>
  );
}
