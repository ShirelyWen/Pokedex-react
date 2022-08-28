import React from "react";
import { BackgroundColor } from "../../../utils/helpers";
import classes from "./PokemonCard.module.css";

const PokemonCard = ({ children, types, onClick, ...rest }) => {
  const style = BackgroundColor(types);
  return (
    <div
      className={classes.card}
      style={{ background: `${style}` }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
};

export default PokemonCard;
