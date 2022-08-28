import React from "react";
import Header from "../../UI/Header/Header";
import Button from "../../UI/Button";
import ExternalLink from "../../UI/Header/ExternalLink";
import { GitHubIcon } from "../../../icons/GitHubIcon";
import classes from "./HomePageHeader.module.css";

const HomePageHeader = () => {
  return (
    <Header>
      <Button className={classes.icon_btn} type="button">
        <span>Pokédex</span>
      </Button>
      <ExternalLink
        href="https://github.com/ShirelyWen/Pokedex.git"
        target="_blank"
      >
        <GitHubIcon />
      </ExternalLink>
    </Header>
  );
};

export default HomePageHeader;
