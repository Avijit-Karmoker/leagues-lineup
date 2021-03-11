import React from "react";
import found from "../../Icon/found.png";
import flag from "../../Icon/flag.png";
import football from "../../Icon/football.png";
import Facebook from "../../Icon/Facebook.png";
import Twitter from "../../Icon/Twitter.png";
import YouTube from "../../Icon/YouTube.png";
import gender from "../../Icon/gender.png";
import male from "../../Photo/male.png";
import female from "../../Photo/female.png";
import "./LeagueFullInfo.css";
import { Link } from "react-router-dom";

const LeagueFullInfo = (props) => {
  const {
    strLeagueAlternate,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strDescriptionEN,
    strFacebook,
    strTwitter,
    strYoutube,
    strLogo,
  } = props.info;
  console.log(props.info);
  return (
    <div>
      <div className="banner" style = {{backgroundImage: `url(${props.info.strBanner})`}}>
        <img src={strLogo} alt=""/>
      </div>
      <div style={{ backgroundColor: "#0e0a2a", paddingTop: "30px" }}>
        <div className="info-description">
          <div className="league-info">
            <div className="info-text">
              <h1>{strLeagueAlternate}</h1>
              <p>
                <img src={found} alt="" />
                Founded: {intFormedYear}
              </p>
              <p>
                <img src={flag} alt="" />
                Country: {strCountry}
              </p>
              <p>
                <img src={football} alt="" />
                Sports Type: {strSport}
              </p>
              <p>
                <img src={gender} alt="" />
                Gender: {strGender}
              </p>
            </div>
            <div className="info-img">
              {strGender === "Male" ? (
                <img src={male} alt="" />
              ) : (
                <img src={female} alt="" />
              )}
            </div>
          </div>
          <p className="description">{strDescriptionEN}</p>
          <div className="logo">
            <Link to={strFacebook}>
              <img src={Facebook} alt="" />
            </Link>
            <Link to={strTwitter}>
              <img src={Twitter} alt="" />
            </Link>
            <Link to={strYoutube}>
              <img src={YouTube} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueFullInfo;
