// DONE
import React, { useState } from "react";
import classes from "./ForgetPassword.module.css";

import LoadingBox from "../../components/LoadingBox/LoadingBox";
import MessageBox from "../../components/MessageBox/MessageBox";

import { forgetPassword } from "../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const { loading, error, data } = useSelector((state) => state.forgetPassword);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };

  return (
    <div className={classes.forgetPassword}>
      <form onSubmit={submitHandler}>
        {loading && <LoadingBox />}
        {error && <MessageBox variant={"error"}>{error}</MessageBox>}
        {data && <MessageBox variant={"message"}>{data}</MessageBox>}
        <div className={classes.header}>Przypomnij hasło</div>
        <input type="email" placeholder="Adres e-mail" required onChange={(e) => setEmail(e.target.value)}></input>
        <button type="submit">PRZYPOMNIJ HASŁO</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
