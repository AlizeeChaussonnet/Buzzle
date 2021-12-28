import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-violet.png";
import Categories from "./Categories";
import Difficulty from "./Difficulty";
import UrlContext from "../Contexts/UrlContext";

const Settings = ({ username }) => {
  const { category, difficulty } = useContext(UrlContext);
  return (
    <>
      <div className="home">
        <div id="logo">
          <div className="home-logo-help-container">
            <img className="logo" src={logo} alt="logo Buzzle" />
          </div>
        </div>
        <h2 className="username-settings">Hello <span id="username-cap">{username}</span>!</h2>
        <div id="display-rules">
          <div className="div-surname-rules">
            <div className="div-rules">
              <Categories />
            </div>
            <div className="div-rules">
              <Difficulty />
              {category && difficulty ? (
                <div className="play-button-container">
                  <Link to="/questions">
                    <button type="button" className="play-button">
                      Play !
                    </button>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="play-button-container" />
    </>
  );
};

export default Settings;
