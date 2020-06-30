import React from "react";
import PropTypes from "prop-types";
import Icon_gamerscore from "../layout/Icon_gamerscore.png";
import trophy from "../layout/trophy.png";

const Xbox360Games = ({
  game: {
    currentAchievements,
    currentGamerscore,
    name,
    totalAchievements,
    totalGamerscore,
  },
}) => {
  return (
    <div className="card text-center">
      <h3>{name}</h3>
      <div className="gamerscore" style={{ overflow: "auto" }}>
        <img
          src={Icon_gamerscore}
          alt="gamerscore"
          style={{
            width: "15px",
            height: "15px",
          }}
        />
        <h4 style={{ paddingLeft: "0.25em", display: "inline" }}>
          {currentGamerscore}/{totalGamerscore}
        </h4>
      </div>
      <div className="achievements" style={{ overflow: "auto" }}>
        <img
          src={trophy}
          alt="achievements"
          style={{
            width: "15px",
            height: "15px",
          }}
        />
        <h4 style={{ paddingLeft: "0.25em", display: "inline" }}>
          {currentAchievements}/{totalAchievements}
        </h4>
      </div>
    </div>
  );
};

Xbox360Games.propTypes = {
  game: PropTypes.object.isRequired,
};

export default Xbox360Games;
