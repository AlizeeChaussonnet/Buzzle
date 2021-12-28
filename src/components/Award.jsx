import brain from "../assets/images/brain.png";
import fireworks from "../assets/images/fireworks.png";
import fox from "../assets/images/fox.png";
import dropdown from "../assets/images/dropdown.png";

const Award = ({ score }) => {
  function handlePhrase() {
    if (score === 5000) {
      const winner = (
        <>
          <h2 className="game-over-title">You Win !</h2>
          <img className="badge-img" src={brain} alt="badge" />
        </>
      );
      return winner;
    }
    if (score >= 2000) {
      const genius = (
        <>
          <h2 className="game-over-title">Almost a genius !</h2>
          <img className="badge-img" src={fireworks} alt="badge" />
        </>
      );
      return genius;
    }

    if (score >= 800) {
      const clever = (
        <>
          <h2 className="game-over-title">As clever as a fox</h2>
          <img className="badge-img" src={fox} alt="badge" />
        </>
      );
      return clever;
    } else {
      const gameOver = (
        <>
          <h2 className="game-over-title">Game Over</h2>
          <img className="badge-img" src={dropdown} alt="badge" />
        </>
      );
      return gameOver;
    }
  }

  return (
    <>
      <div className="game-over-container">{handlePhrase()}</div>
    </>
  );
};

export default Award;
