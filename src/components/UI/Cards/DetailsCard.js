import React from "react";
import classes from "./DetailsCard.module.css";

const DetailsCard = (props) => {
  const title = props.title && <h1 className={classes.title}>{props.title}</h1>;
  return (
    <section className={classes.section}>
      {title}
      {props.children}
    </section>
  );
};

export default DetailsCard;
