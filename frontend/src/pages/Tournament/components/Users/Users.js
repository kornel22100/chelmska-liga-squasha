import React from "react";
import classes from "./Users.module.css";

const Users = (props) => {
  return (
    <div className={classes.users}>
      <div className={classes.header}>
        <div className={classes.cell}>Miejsce</div>
        <div className={classes.cell}>Imię i nazwisko</div>
        <div className={classes.cell}>Punkty rankingowe</div>
      </div>
      {props.users.map((user, index) => (
        <div key={index} className={classes.row}>
          <div className={classes.cell}>{index + 1}</div>
          <div className={classes.cell}>
            <span>{user.name}</span>
          </div>
          <div className={classes.cell}>{user.points || "-"}</div>
        </div>
      ))}
    </div>
  );
};

export default Users;
