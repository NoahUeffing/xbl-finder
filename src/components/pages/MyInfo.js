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
        <div className="text-center vertical-middle p-2">
          <img
            src={displayPicRaw}
            alt=""
            className="img"
            style={{ width: "150px" }}
          />
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
            <h2
              style={{
                paddingLeft: "0.25em",
                display: "inline",
              }}
            >
              {gamerscore}
            </h2>
          </div>
          <div style={{ overflow: "auto", paddingTop: "0.5em" }}>
            <h2>Currently {presenceState}</h2>
            <h3>
              {presenceText} on {presenceDetails[0].Device}
            </h3>
            <h3>Name: {realName}</h3>
            <h3>Location: {location}</h3>
            <h3>Followers: {detail.followerCount}</h3>
            <h3>Following: {detail.followingCount}</h3>
            <h3>Bio: {bio}</h3>
            <h3>Motto: {motto}</h3>
            <h3>Reputation: {xboxOneRep}</h3>
            <h3>Membership Type: {tier}</h3>
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
