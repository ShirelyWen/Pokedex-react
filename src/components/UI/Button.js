import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, className, type, disabled, onClick, ...rest }) => {
  const btnClass = `${classes.button} ${className || ""}`;
  return (
    <button
      className={btnClass}
      type={type}
      onClick={onClick}
      disabled={false || disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
