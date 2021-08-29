import React from "react";
import classes from "./Games.module.css";
import Sets from "./Sets/Sets";

const Games = (props) => {
  return (
    <div className={classes.games}>
      <div className={classes.header}>
        <div className={classes.cell}>#</div>
        <div className={classes.cell}>Imię i nazwisko</div>
        <div className={classes.cell}>Sety</div>
        <div className={classes.cell}>Wynik</div>
        <div className={classes.cell}>Punkty</div>
      </div>
      {props.games.map((game, index) => (
        <div key={index} className={classes.row}>
          <div className={classes.cell}>{index + 1}</div>
          <div className={classes.users}>
            <div className={classes.cell}>
              <span>{game.users[0]}</span>
            </div>
            <div className={classes.cell}>
              <span>{game.users[1]}</span>
            </div>
          </div>
          <Sets sets={game.sets} points={game.points} />
          <div className={classes.scores}>
            <div className={classes.cell}>{game.scores[0]}</div>
            <div className={classes.cell}>{game.scores[1]}</div>
          </div>
          <div className={classes.points}>
            <div className={classes.cell}>{game.points[0]}</div>
            <div className={classes.cell}>{game.points[1]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Games;
