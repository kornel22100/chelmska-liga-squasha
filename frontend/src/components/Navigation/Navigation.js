// DONE
import React from "react";
import classes from "./Navigation.module.css";

import { Link, NavLink } from "react-router-dom";
import { signout } from "../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
  const { data } = useSelector((state) => state.signin);
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <div className={classes.navigation}>
      <div className={classes.container}>
        <NavLink to="/" exact className={classes.item} activeClassName={classes.active}>
          AKTUALNOŚCI
        </NavLink>
        <NavLink to="/league" className={classes.item} activeClassName={classes.active}>
          LIGA
        </NavLink>
        <NavLink to="/tournament" className={classes.item} activeClassName={classes.active}>
          TURNIEJE
        </NavLink>
        {data ? (
          <>
            <NavLink to="/account" className={classes.item} activeClassName={classes.active}>
              USTAWIENIA
            </NavLink>
            <Link to="#" className={classes.item} onClick={signoutHandler}>
              WYLOGUJ
            </Link>
          </>
        ) : (
          <NavLink to="/signin" className={classes.item} activeClassName={classes.active}>
            ZALOGUJ
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navigation;
