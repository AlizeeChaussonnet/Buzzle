import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo-violet.png";
import medal1 from "../assets/images/medal_1.png";
import medal2 from "../assets/images/medal_2.png";
import medal3 from "../assets/images/medal_3.png";

const Scores = () => {
  const urlApiLeaderboard = `${process.env.REACT_APP_BUZZLE_API}/leaderboard/order`;
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(urlApiLeaderboard)
      .then((response) => response.json())
      .then((data) => setLeaderboard(data));
  }, []);

  return (
    <>
      <div className="home">
        <div id="logo">
          <div className="home-logo-help-container">
            <img className="logo" src={logo} alt="logo Buzzle" />
          </div>
        </div>
      </div>
      <div className="questions-container" id="leaderboard">
        <div className="container-leaderbord">
          <h2>LeaderBoard</h2>
          <div className="table-container">
            <ul className="ul-list">
              <table>
                <thead>
                  <tr>
                    <th>Ranking</th>
                    <th>Avatar</th>
                    <th>UserName</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((classement, index) => (
                    <tr className="list-theme">
                      <td>
                        {index == 0 ? (
                          <img className="medal" src={medal1} alt="Medal1" />
                        ) : index == 1 ? (
                          <img className="medal" src={medal2} alt="Medal2" />
                        ) : index == 2 ? (
                          <img className="medal" src={medal3} alt="Medal3" />
                        ) : (
                          index + 1
                        )}
                      </td>
                      <td>
                        <img
                          src={`https://avatars.dicebear.com/api/personas/${classement.username}.svg`}
                          className="avatar-leaderboard"
                          alt="avatar"
                        />
                      </td>
                      <td>{classement.username}</td>
                      <td>{classement.score} points</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ul>
          </div>
          <div className="endgame-buttons">
            <NavLink exact to="/questions">
              <button type="button" className="end-button">
                Replay
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scores;
