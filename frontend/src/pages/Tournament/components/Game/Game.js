// DONE
import React from "react";
import classes from "./Game.module.css";

const Game = (props) => {
  return (
    <div className={classes.game}>
      <div className={classes.row}>
        <div className={classes.cell}>{props.game.id}</div>
        <div className={classes.users}>
          <div className={classes.cell}>
            <span>{props.game.users[0]}</span>
            <span className={classes.factor}>{props.game.factors[0]}</span>
          </div>
          <div className={classes.cell}>
            <span>{props.game.users[1]}</span>
            <span className={classes.factor}>{props.game.factors[1]}</span>
          </div>
        </div>
        <div className={classes.sets}>
          {props.game.sets.map((set, index) => (
            <div key={index} className={classes.cell}>
              {set}
            </div>
          ))}
        </div>
        <div className={classes.scores}>
          <div className={classes.cell}>{props.game.scores[0]}</div>
          <div className={classes.cell}>{props.game.scores[1]}</div>
        </div>
      </div>
    </div>
  );
};

export default Game;
