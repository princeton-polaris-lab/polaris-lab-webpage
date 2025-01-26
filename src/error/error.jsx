import React from "react";
import { useRouteError, Link } from "react-router-dom";
import "./error.css";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error">
        <div className="error-display">
            <img className="lost-robot-image" alt="Robot lost in maze" src={require("./robot_lost_in_maze.png")}/>
            <h1 className="error-title">Oh no! We've gotten lost!</h1>
            <h2 className="error-message">
            The error message is "{error?.statusText || error?.message || "An unexpected error has occurred."}"
            </h2>
            <div className="error-actions">
            <Link to="/"> Go Back Home</Link>
            </div>
        </div>
        <div className="footer">
            <hr/>
            <p>The AI Law and Society Lab &copy; 2024</p>
        </div>
    </div>
  );
};