import React from "react";
import classes from "./ExternalLink.module.css";

const ExternalLink = ({children, className, href, ...rest}) => {
  const linkClass = `${classes.link} ${className || ""}`;
  return (
    <a href={href} className={linkClass} {...rest}>
      {children}
    </a>
  );
};

export default ExternalLink;
