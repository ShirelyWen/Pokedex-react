import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, className, type, ...rest }) => {
  const btnClass = `${classes.button} ${className || ""}`;
  return (
    <button className={btnClass} type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
