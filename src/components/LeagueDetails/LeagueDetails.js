import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LeagueFullInfo from '../LeagueFullInfo/LeagueFullInfo';

const LeagueDetails = () => {
    let {idLeague} = useParams();

    let[league, setLeague] = useState([]);

    useEffect(() => {
        let url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setLeague(data.leagues));
    }, []);

    return (
        <div>
           {
               league.map(fullInfo => {
               return(
                <>
                    <LeagueFullInfo info={fullInfo} key = {idLeague}></LeagueFullInfo>
                </>
                )}
               )
           }
        </div>
    );
};

export default LeagueDetails;