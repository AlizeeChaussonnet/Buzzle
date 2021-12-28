import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animalArray, adjectifArray } from "./Names";
import Avatar from "./Avatar";

const Namegenerator = ({ onNameSelected, username }) => {
  const [name, setName] = useState("?");
  const [randomName, setRandomName] = useState("");
  const [isNamePicked, setPickedName] = useState(false);

  function randomNumber(array) {
    return Math.floor(Math.random() * array.length);
  }
  function getRandomName() {
    let animal = animalArray[randomNumber(animalArray)];
    let adjective = adjectifArray[randomNumber(adjectifArray)];
    setRandomName(adjective + animal);
  }

  useEffect(() => {
    getRandomName();
  }, [name]);

  function setUserName() {
    setName(randomName);
    onNameSelected(randomName);
  }
  return (
    <>
      <Avatar randomName={randomName} />
      <div className="username">
        {isNamePicked ? <p className="random-username">{username}</p> : null}
      </div>
      <button
        type="button"
        className="play-button"
        onClick={() => {
          setUserName(), setPickedName(true);
        }}
      >
        Generate a random name
      </button>
      {isNamePicked ? (
        <div className="play-button-container">
          <Link to="/settings">
            <button type="button" className="play-button">
              Go !
            </button>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default Namegenerator;
