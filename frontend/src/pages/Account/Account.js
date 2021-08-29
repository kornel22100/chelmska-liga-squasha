// DONE
import React, { useEffect, useState } from "react";
import classes from "./Account.module.css";

import LoadingBox from "../../components/LoadingBox/LoadingBox";
import MessageBox from "../../components/MessageBox/MessageBox";

import { account, updateAccount } from "../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_ACCOUNT_RESET } from "../../store/constants/userConstants";

const Account = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.signin);
  const { loading, error, data: dataAccount } = useSelector((state) => state.account);

  const { data: dataUpdateAccount, error: errorUpdateAccount, loading: loadingUpdateAccount } = useSelector((state) => state.updateAccount);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Wprowadzone hasła nie są identyczne");
    } else {
      dispatch(updateAccount({ userId: data._id, email, password }));
    }
  };

  useEffect(() => {
    if (!dataAccount) {
      dispatch(account(data._id));
    } else {
      dispatch({ type: UPDATE_ACCOUNT_RESET });
      setEmail(dataAccount.email);
    }
  }, [dispatch, data._id, dataAccount]);

  return (
    <div className={classes.account}>
      <form onSubmit={submitHandler}>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="error"></MessageBox>
        ) : (
          <>
            {loadingUpdateAccount && <LoadingBox></LoadingBox>}
            {errorUpdateAccount && <MessageBox variant="error">{errorUpdateAccount}</MessageBox>}
            {dataUpdateAccount && <MessageBox variant="message">Profil został zaktualizowany</MessageBox>}
            <div className={classes.header}>Zaktualizuj profil</div>
            <input type="email" value={email} placeholder={"Email"} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" value={password} placeholder={"Nowe hasło"} onChange={(e) => setPassword(e.target.value)}></input>
            <input
              type="password"
              value={confirmPassword}
              placeholder={"Potwierdź nowe hasło"}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
            <button type="submit">ZAKTUALIZUJ PROFIL</button>
          </>
        )}
      </form>
    </div>
  );
};

export default Account;
