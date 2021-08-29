// DONE
import React, { useEffect, useState } from "react";
import classes from "./League.module.css";

import { leagueData } from "../../store/actions/leagueActions";
import { useDispatch, useSelector } from "react-redux";

import Games from "./components/Games/Games";
import LoadingBox from "../../components/LoadingBox/LoadingBox";
import MessageBox from "../../components/MessageBox/MessageBox";
import Users from "./components/Users/Users";

const League = () => {
  const [season, setSeason] = useState("");
  const [league, setLeague] = useState("");
  const [group, setGroup] = useState("");

  const { loading, error, data } = useSelector((state) => state.leagueData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(leagueData(season, league, group));
  }, [dispatch, season, league, group]);

  return (
    <div className={classes.league}>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant={"error"}>{error}</MessageBox>
      ) : (
        <>
          <div className={classes.selects}>
            <select value={season} onChange={(e) => setSeason(e.target.value)}>
              {data.seasons.map((season) => (
                <option key={season}>{season}</option>
              ))}
            </select>
            <select value={league} onChange={(e) => setLeague(e.target.value)}>
              {data.leagues.map((league) => (
                <option key={league}>{league}</option>
              ))}
            </select>
            <select value={group} onChange={(e) => setGroup(e.target.value)}>
              {data.groups.map((group) => (
                <option key={group}>{group}</option>
              ))}
            </select>
          </div>
          <div className={classes.header}>TABELA</div>
          <Users users={data.users} />
          <div className={classes.header}>MECZE</div>
          <Games games={data.games} />
        </>
      )}
    </div>
  );
};

export default League;
