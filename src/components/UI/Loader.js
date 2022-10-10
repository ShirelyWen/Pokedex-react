import React from "react";
import { LoaderIcon } from "../../icons/Loader";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.loader}>
      <LoaderIcon />
    </div>
  );
};

export default Loader;
