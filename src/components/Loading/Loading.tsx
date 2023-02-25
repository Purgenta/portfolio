import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={style["loading"]}>
      <FontAwesomeIcon
        size="3x"
        icon={faSpinner}
        className={style["spinner"]}
      ></FontAwesomeIcon>
    </div>
  );
};

export default Loading;
