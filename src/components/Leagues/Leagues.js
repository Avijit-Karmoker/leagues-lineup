import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Leagues.css";

const Leagues = (props) => {
  let { strLeagueAlternate, strSport, idLeague } = props.league;
  return (
    <div className="cart">
          <div className="leagues">
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
