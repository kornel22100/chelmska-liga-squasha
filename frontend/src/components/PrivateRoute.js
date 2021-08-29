// DONE
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { data } = useSelector((state) => state.signin);
  return <Route {...rest} render={(props) => (data ? <Component {...props}></Component> : <Redirect to="/signin" />)}></Route>;
}
