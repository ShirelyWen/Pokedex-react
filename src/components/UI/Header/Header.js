import React from "react";
import classes from "./Header.module.css";

const Header = ({ children, color, ...rest }) => {
  return (
    <header
      className={classes.header}
      style={{ backgroundColor: color }}
      {...rest}
    >
      {children}
    </header>
  );
};

export default Header;
