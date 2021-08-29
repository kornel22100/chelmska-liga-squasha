import React, { useState } from "react";
import classes from "./ResetPassword.module.css";

import LoadingBox from "../../components/LoadingBox/LoadingBox";
import MessageBox from "../../components/MessageBox/MessageBox";

import { resetPassword } from "../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const ResetPassword = (props) => {
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { loading, error, data } = useSelector((state) => state.resetPassword);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(resetPassword(props.location.pathname.split("/").pop(), password));
  };

  return (
    <div className={classes.resetPassword}>
      <form onSubmit={submitHandler}>
        {loading && <LoadingBox />}
        {error && <MessageBox variant={"error"}>{error}</MessageBox>}
        {data && <MessageBox variant={"message"}>{data}</MessageBox>}
        <div className={classes.header}>Ustaw nowe hasło</div>
        <input type="password" placeholder="Nowe hasło" required onChange={(e) => setPassword(e.target.value)}></input>
        <button type="submit">ZMIEŃ HASŁO</button>
      </form>
    </div>
  );
};

export default ResetPassword;
