import React, { useEffect, useState } from "react";
import Leagues from "../Leagues/Leagues";
import "./Home.css";

const Home = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    let url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setLeagues(data));
  }, []);
  const leaguesDetail = leagues.leagues;
  return (
    <div>
      <div className="background">
        <h1>Leagues Lineup</h1>
      </div>
      <div className="container">
        {leaguesDetail?.map((league) => (
          <Leagues league={league} key={league.idLeague}></Leagues>
        ))}
      </div>
    </div>
  );
};

export default Home;
