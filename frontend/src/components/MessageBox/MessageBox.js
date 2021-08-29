// DONE
import React from "react";
import classes from "./MessageBox.module.css";

const MessageBox = (props) => {
  return <div className={[classes.messageBox, classes[props.variant]].join(" ")}>{props.children}</div>;
};

export default MessageBox;
