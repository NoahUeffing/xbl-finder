import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import Icon_gamerscore from "../layout/Icon_gamerscore.png";

const MyInfo = ({
  myInfo: {
    gamerpicLargeImagePath,
    gamertag,
    gamerscore,
    location,
    bio,
    motto,
    tier,
  },
  newProfile: {
    realName,
    displayPicRaw,
    xboxOneRep,
    presenceState,
    presenceText,
    presenceDetails,
    detail,
    gamerScore,
    modernGamertag,
  },
  loading,
}) => {
  if (loading) {
    return <Spinner />;
  } else {
    // for now, redirects to main page if api calls are not finished
    // to avoid crashing
    // TODO: seperate each api call from main page to just call when
    // acessing the page you want to view
    if (typeof presenceDetails == "undefined") {
      window.location.replace("http://localhost:3000/");
    }
    return (
      <Fragment>
        <div className="text-center vertical-middle p-2 card">
          <img
            src={displayPicRaw}
            alt=""
            className="img round-img"
            style={{ width: "150px" }}
          />
          <img
            src={gamerpicLargeImagePath}
            alt=""
            className="img"
            style={{ width: "150px" }}
          />
          <h1>{gamertag}</h1>
          <h3>{realName}</h3>
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
              {gamerscore}
            </h2>
          </div>
          <div>
            <h2>Currently {presenceState}</h2>
            <h3>
              {presenceText} on {presenceDetails[0].Device}
            </h3>
          </div>
          <div>
            <div id="parent" className="text-left padding-top">
              <div className="flex-container">
                <h3>Location</h3>
                <h3>{location}</h3>
              </div>
              <div className="flex-container">
                <h3>Followers</h3>
                <h3>{detail.followerCount}</h3>
              </div>
              <div className="flex-container">
                <h3>Friends</h3>
                <h3>{detail.followingCount}</h3>
              </div>
            </div>
            <div className="padding-top">
              <h3>Bio: {bio}</h3>
              <h3>Motto: {motto}</h3>
              <h3>Reputation: {xboxOneRep}</h3>
              <h3>Membership Type: {tier}</h3>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

MyInfo.PropTypes = {
  myInfo: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  newProfile: PropTypes.array.isRequired,
};

export default MyInfo;
