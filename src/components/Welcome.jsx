import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo-violet.png";

const Welcome = () => {
  return (
    <div className="welcome-container1">
      <div className="welcome-container2">
        <div className="welcome-container3">
          <img src={logo} alt="Logo" className="welcome-logo" />
        </div>
        <div className="play-button-container">
          <NavLink exact to="/home">
            <button type="button" className="play-button">
              PLAY
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
