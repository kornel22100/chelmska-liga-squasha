// DONE
import React from "react";
import classes from './LoadingBox.module.css'
import { FaSpinner } from "react-icons/fa";

const LoadingBox = () => {
  return (
    <div className={classes.loadingBox}>
      <FaSpinner /> Ładowanie...
    </div>
  );
};

export default LoadingBox;
