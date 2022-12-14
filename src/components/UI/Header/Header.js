import React from "react";
import classes from "./Header.module.css";

const Header = ({ children, color, position, ...rest }) => {
  return (
    <header
      className={classes.header}
      style={{ backgroundColor: color, position: position }}
      {...rest}
    >
      {children}
    </header>
  );
};

export default Header;
