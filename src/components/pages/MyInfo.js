import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import Icon_gamerscore from "../layout/Icon_gamerscore.png";

const MyInfo = ({
  myInfo: {
    gamerpicLargeImagePath,
    gamertag,
    gamerscore,
    name,
    location,
    bio,
    motto,
    tier,
  },
  loading,
}) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <div className="text-center vertical-middle">
          <img
            src={gamerpicLargeImagePath}
            alt=""
            className="img"
            style={{ width: "150px" }}
          />
          <h1>{gamertag}</h1>
          <div style={{ overflow: "auto" }}>
            <img
              src={Icon_gamerscore}
              alt="gamerscore"
              style={{
                width: "15px",
                height: "15px",
              }}
            />
            <h2 style={{ paddingLeft: "0.25em", display: "inline" }}>
              {gamerscore}
            </h2>
          </div>
          <h3>Name: {name}</h3>
          <h3>Location: {location}</h3>
          <h3>Bio: {bio}</h3>
          <h3>Motto: {motto}</h3>
          <h3>Membership Type: {tier}</h3>
        </div>
      </Fragment>
    );
  }
};

MyInfo.PropTypes = {
  myInfo: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MyInfo;
