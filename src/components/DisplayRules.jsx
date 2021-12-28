import Username from "./Username";

const DisplayRules = ({ onNameSelected, username}) => {
  return (
    <div id="display-rules">
      <div className="div-surname-rules">
        <Username onNameSelected={onNameSelected} username={username} />
      </div>
    </div>
  );
};

export default DisplayRules;
