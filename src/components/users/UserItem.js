import React from "react";
import PropTypes from "prop-types";

const UserItem = ({
  user: { Gamertag, GameDisplayPicRaw, Gamerscore, AccountTier },
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
      <h4>{Gamerscore}</h4>
      <h4>{AccountTier}</h4>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
