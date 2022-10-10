import React from "react";
import Header from "../../UI/Header/Header";
import Button from "../../UI/Button";
import ExternalLink from "../../UI/Header/ExternalLink";
import { GitHubIcon } from "../../../icons/GitHubIcon";
import classes from "./HomePageHeader.module.css";

const HomePageHeader = () => {
  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Header position={"sticky"}>
      <Button
        className={classes.icon_btn}
        type="button"
        onClick={scrollToTopHandler}
      >
        <span>Pokédex</span>
      </Button>
      <ExternalLink
        href="https://github.com/ShirelyWen/Pokedex-react.git"
        target="_blank"
      >
        <GitHubIcon />
      </ExternalLink>
    </Header>
  );
};

export default HomePageHeader;
