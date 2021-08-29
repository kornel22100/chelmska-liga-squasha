// DONE
import React from "react";
import classes from "./Main.module.css";

import { Route, Switch } from "react-router-dom";

import Account from "../../pages/Account/Account";
import Article from "../../pages/Article/Article";
import ForgetPassword from "../../pages/ForgetPassword/ForgetPassword";
import Home from "../../pages/Home/Home";
import League from "../../pages/League/League";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import Signin from "../../pages/Signin/Signin";
import Tournament from "../../pages/Tournament/Tournament";
import PrivateRoute from "../PrivateRoute";

const Main = () => {
  return (
    <div className={classes.main}>
      <Switch>
        <Route path="/league" component={League}></Route>
        <Route path="/tournament" component={Tournament}></Route>
        <PrivateRoute path="/account" component={Account}></PrivateRoute>
        <Route path="/signin" component={Signin}></Route>
        <Route path="/forgetPassword" component={ForgetPassword}></Route>
        <Route path="/resetPassword" component={ResetPassword}></Route>
        <Route path="/articles/:id" component={Article}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </div>
  );
};

export default Main;
