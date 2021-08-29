import React, { useEffect, useState } from "react";
import classes from "./Tournament.module.css";

import { tournamentData } from "../../store/actions/tournamentActions";
import { useDispatch, useSelector } from "react-redux";

import Ladder from "./components/Ladder/Ladder";
import LoadingBox from "../../components/LoadingBox/LoadingBox";
import MessageBox from "../../components/MessageBox/MessageBox";
import Places from "./components/Places/Places";
import Users from "./components/Users/Users";

const Tournament = () => {
  const [name, setName] = useState("");
  const { loading, error, data } = useSelector((state) => state.tournamentData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tournamentData(name));
  }, [dispatch, name]);

  return (
    <div className={classes.tournament}>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant={"error"}>{error}</MessageBox>
      ) : (
        <>
          <select value={name} onChange={(e) => setName(e.target.value)}>
            {data.tournaments.map((tournament) => (
              <option key={tournament}>{tournament}</option>
            ))}
          </select>
          <Users users={data.users} />
          <div className={classes.header}>Mecze o miejsca</div>
          <Places games={data.games.places} />
          <div className={classes.header}>Drabinka turniejowa</div>
          <Ladder games={data.games.ladder} />
        </>
      )}
    </div>
  );
};

export default Tournament;
