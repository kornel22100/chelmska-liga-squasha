// DONE
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}></Link>
      </div>
    </div>
  );
};

export default Header;
