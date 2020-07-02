import React from "react";
import Xbox360Games from "../games/Xbox360Games";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import Icon_gamerscore from "../layout/Icon_gamerscore.png";

const MyXbox360Games = ({ games, loading, player }) => {
  if (loading) {
    return <Spinner />;
  } else {
    if (typeof games == "undefined") {
      window.location.replace("http://localhost:3000/");
    }
    return (
      <div>
        <div className="text-center vertical-middle p-2 card">
          <img
            src={player.gamerpicLargeImagePath}
            alt=""
            className="img"
            style={{ width: "150px" }}
          />
          <h1>{player.gamertag}</h1>
          <div style={{ overflow: "auto" }}>
            <img
              src={Icon_gamerscore}
              alt="gamerscore"
              style={{
                width: "15px",
                height: "15px",
              }}
            />
            <h2
              style={{
                paddingLeft: "0.25em",
                display: "inline",
              }}
            >
              {player.gamerscore}
            </h2>
          </div>
        </div>
        <div style={userStyle}>
          {games.map((game) => (
            <Xbox360Games key={game.id} game={game} />
          ))}
        </div>
      </div>
    );
  }
};

MyXbox360Games.propTypes = {
  games: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  player: PropTypes.array.isRequired,
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default MyXbox360Games;
