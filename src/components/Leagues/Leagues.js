import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Leagues.css";
import { useEffect, useState } from "react";

const Leagues = (props) => {
  let { strLeagueAlternate, strSport, idLeague } = props.league;

  const [leagueLogo, setLeagueLogo] = useState([]);

  useEffect(() =>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
    .then((response) => response.json())
    .then(data => setLeagueLogo(data.leagues))
  }, [idLeague])
  return (
    <div className="cart">
          <div className="leagues">
            {
              leagueLogo?.map(logo => <img src={logo.strLogo} alt="lOGO"/>)
            }
            <h4>{strLeagueAlternate}</h4>
            <p>Sports type: {strSport}</p>
            <Link to={`${idLeague}`} style={{ color: "#fff" }}>
              <Button variant="primary">
                Explore
                <FontAwesomeIcon
                  style={{ marginLeft: "10px" }}
                  icon={faArrowRight}
                />
              </Button>
            </Link>
          </div>
    </div>
    );
};

export default Leagues;
