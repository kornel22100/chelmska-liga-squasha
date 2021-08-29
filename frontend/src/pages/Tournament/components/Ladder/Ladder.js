import React from "react";
import classes from "./Ladder.module.css";
import Game from "../Game/Game";

const Ladder = (props) => {
  return (
    <div className={classes.ladder}>
      <div className={classes.container}>
        <div className={classes.games}>
          {props.games.slice(0, 8).map((game, index) => (
            <Game key={index} game={game} />
          ))}
        </div>
        <div className={classes.games}>
          {props.games.slice(8, 12).map((game, index) => (
            <Game key={index} game={game} />
          ))}
        </div>
        <div className={classes.games}>
          {props.games.slice(12, 14).map((game, index) => (
            <Game key={index} game={game} />
          ))}
        </div>
        <div className={classes.games}>
          {props.games.slice(14, 18).map((game, index) => (
            <Game key={index} game={game} />
          ))}
        </div>
        <div className={classes.games}>
          {props.games.slice(18, 20).map((game, index) => (
            <Game key={index} game={game} />
          ))}
        </div>
        <div className={classes.games}>
          {props.games.slice(20, 28).map((game, index) => (
            <Game key={index} game={game} />
          ))}
        </div>
        <div className={classes.games}>
          {props.games.slice(28, 32).map((game, index) => (
            <Game key={index} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ladder;
