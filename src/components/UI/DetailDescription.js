import React from "react";
import classes from "./DetailDescription.module.css";

const DetailDescription = (props) => {
  const className = `${classes.content} ${props.className || ""}`;
  return (
    <div key={props.key} className={className}>
      <span>{props.name}:</span>
      <p>{props.value}</p>
    </div>
  );
};

export default DetailDescription;
