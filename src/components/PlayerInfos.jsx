import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const PlayerInfos = ({ username, score, life }) => {
  return (
    <div className="player-infos-container1">
      <div className="player-infos-container2">
        <ul>
          <li>{username}</li>
        </ul>
        <ul>
          <li>Score: {score} points</li>
        </ul>
        <ul>
          <li>{life >= 1 ? <FavoriteIcon /> : <FavoriteBorderIcon />}</li>
          <li>{life >= 2 ? <FavoriteIcon /> : <FavoriteBorderIcon />}</li>
          <li>{life === 3 ? <FavoriteIcon /> : <FavoriteBorderIcon />}</li>
        </ul>
      </div>
    </div>
  );
};

export default PlayerInfos;
