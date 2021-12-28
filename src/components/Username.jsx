import React from "react";
import Namegenerator from "./Namegenerator";

const Username = ({ onNameSelected, username }) => {
  return (
    <div className="div-rules">
      <h2 className="choose-username">Choose your username </h2>
      <Namegenerator onNameSelected={onNameSelected} username={username} />
    </div>
  );
};

export default Username;
