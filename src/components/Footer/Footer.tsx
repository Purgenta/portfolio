import React from "react";
import style from "./Footer.module.css";
const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <>
      <p className={style["information"]}>
        © {currentYear} Nikola Todorovic. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
