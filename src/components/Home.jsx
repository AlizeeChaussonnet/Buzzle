import logo from "../assets/images/logo-violet.png";
import DisplayRules from "./DisplayRules";

const Home = ({
  username = "Choose your username below ",
  onUserNameChange,
}) => {
  return (
    <>
      <div className="home">
        <div id="logo">
          <div className="home-logo-help-container">
            <img className="logo" src={logo} alt="logo Buzzle" />
          </div>
        </div>

        <DisplayRules onNameSelected={onUserNameChange} username={username} />
      </div>
    </>
  );
};

export default Home;
