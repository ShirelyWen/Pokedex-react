import React from "react";
import classes from "./DetailsPageHeader.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../../UI/Header/Header";
import { BackArrow } from "../../../../icons/BackArrow";
import { Colors, findData, getFirstType } from "../../../../utils/helpers";

const DetailsPageHeader = (props) => {
  const navigate = useNavigate();
  const backToHomeHandler = () => {
    console.log("clicked");
    navigate("/");
  };

  const pokemonsList = useSelector((state) => state.pokemonsList.pokemonsList);
  const pokemon = findData(pokemonsList, props.id);
  const type = getFirstType(pokemon);

  return (
    <Header color={Colors[type]} position={"static"}>
      <button
        type="button"
        className={classes.back_btn}
        onClick={backToHomeHandler}
      >
        <BackArrow />
      </button>
    </Header>
  );
};

export default DetailsPageHeader;
