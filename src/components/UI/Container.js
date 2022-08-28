import React from "react";
import classes from "./Container.module.css";

const Container = ({ children, ...rest }) => {
  return (
    <div className={classes.container} {...rest}>
      {children}
    </div>
  );
};

export default Container;
