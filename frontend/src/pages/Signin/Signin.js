import React, { useEffect, useState } from "react";
import classes from "./Signin.module.css";

import LoadingBox from "../../components/LoadingBox/LoadingBox";
import MessageBox from "../../components/MessageBox/MessageBox";

import { Link } from "react-router-dom";
import { signin } from "../../store/actions/userActions";
// DONE
import { useDispatch, useSelector } from "react-redux";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search ? props.location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.signin);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (data) {
      props.history.push(redirect);
    }
  }, [data, props.history, redirect]);

  return (
    <div className={classes.signin}>
      <form onSubmit={submitHandler}>
        {loading && <LoadingBox />}
        {error && <MessageBox variant={"error"}>{error}</MessageBox>}
        <div className={classes.header}>Zaloguj się</div>
        <input type="email" placeholder="Adres e-mail" required onChange={(e) => setEmail(e.target.value)}></input>
        <input type="password" placeholder="Hasło" required onChange={(e) => setPassword(e.target.value)}></input>
        <Link to="/forgetPassword">Przypomnij hasło</Link>
        <button type="submit">ZALOGUJ SIĘ</button>
      </form>
    </div>
  );
};

export default Signin;
