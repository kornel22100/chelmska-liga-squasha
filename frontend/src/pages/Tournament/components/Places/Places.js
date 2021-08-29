import React from "react";
import classes from "./Places.module.css";

const Places = (props) => {
  return (
    <div className={classes.places}>
      <div className={classes.header}>
        <div className={classes.cell}>Miejsca</div>
        <div className={classes.cell}>Imię i nazwisko</div>
        <div className={classes.cell}>Sety</div>
        <div className={classes.cell}>Wynik</div>
      </div>
      {props.games.map((game, index) => (
        <div key={index} className={classes.row}>
          <div className={classes.cell}>
            {index * 2 + 1}-{index * 2 + 2}
          </div>
          <div className={classes.users}>
            <div className={classes.cell}>
              <span>{game.users[0]}</span>
              <span className={classes.factor}>{game.factors[0]}</span>
            </div>
            <div className={classes.cell}>
              <span>{game.users[1]}</span>
              <span className={classes.factor}>{game.factors[1]}</span>
            </div>
          </div>
          <div className={classes.sets}>
            {game.sets.map((set, index) => (
              <div key={index} className={classes.cell}>
                {set}
              </div>
            ))}
          </div>
          <div className={classes.scores}>
            <div className={classes.cell}>{game.scores[0]}</div>
            <div className={classes.cell}>{game.scores[1]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Places;
