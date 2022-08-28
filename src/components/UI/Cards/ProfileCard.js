import React from "react";
import { Colors } from "../../../utils/helpers";
import classes from "./ProfileCard.module.css";

const ProfileCard = ({ children, title, type }) => {
  return (
    <div className={classes.container}>
      <div
        className={classes.title}
        style={{ backgroundColor: `${Colors[type]}` }}
      >
        <p>{title}</p>
      </div>
      {children}
    </div>
  );
};

export default ProfileCard;
