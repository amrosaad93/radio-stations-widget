import React from "react";
import RadioContainerCSS from "./RadioContainer.module.css";

const RadioContainer: React.FC = (props) => {
  return <div className={RadioContainerCSS.container}>{props.children}</div>;
};

export default RadioContainer;
