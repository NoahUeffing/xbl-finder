import React from "react";
import PropTypes from "prop-types";
import Icon_gamerscore from "../layout/Icon_gamerscore.png";

const UserItem = ({
  user: {
    Gamertag,
    GameDisplayPicRaw,
    Gamerscore,
    AccountTier,
    TenureLevel,
    XboxOneRep,
  },
}) => {
  return (
    <div className="card text-center">
      <img
        src={GameDisplayPicRaw}
        alt=""
        className="round-img"
        style={{ width: "100px" }}
      />
      <h3>{Gamertag}</h3>
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
          {Gamerscore}
        </h4>
      </div>
      <h4>Membership Type: {AccountTier}</h4>
      <h4>Year(s) Subscribed: {TenureLevel}</h4>
      <h4> Reputation: {XboxOneRep}</h4>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
