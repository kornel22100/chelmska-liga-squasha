import React from "react";
import classes from "./Sets.module.css";

const Sets = (props) => {
  if (props.points[0] === props.points[1]) {
    return <div className={classes.unmatched}>NIEROZEGRANY</div>;
  }

  if ((props.points[0] === 5) & (props.points[1] === 0)) {
    return (
      <div className={classes.walkowers}>
        <div className={classes.cell}>WALKOWER</div>
        <div className={classes.cell}>-</div>
      </div>
    );
  }

  if (props.points[0] === 0 && props.points[1] === 5) {
    return (
      <div className={classes.walkowers}>
        <div className={classes.cell}>-</div>
        <div className={classes.cell}>WALKOWER</div>
      </div>
    );
  }

  return (
    <div className={classes.sets}>
      {props.sets.map((set, index) => (
        <div key={index} className={classes.cell}>
          {set}
        </div>
      ))}
    </div>
  );
};

export default Sets;
