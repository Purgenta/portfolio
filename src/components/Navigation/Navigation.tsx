import React from "react";
import { NavLink, Link } from "react-router-dom";
import style from "./Navigation.module.css";
type IsActive = {
  isActive: boolean;
};
const Navigation = () => {
  const navLinkActive = (isActive: IsActive): string =>
    isActive ? style["active-link"] : "";
  return (
    <nav className={style["main-nav"]}>
      <div className={style["logo"]}>
        <div className={style["logo-wrapper"]}></div>
        <h2 className={style["dev-name"]}>Nikola Todorovic</h2>
      </div>
      <ol className={style["nav-links"]}>
        <li className={style["nav-link"]}>
          <a href="#about">About</a>
        </li>
        <li className={style["nav-link"]}>
          <a href="#projects">Projects</a>
        </li>
        <li className={style["nav-link"]}>
          <a href="#contact">Contact</a>
        </li>
      </ol>
      <div className={style["resume"]}>
        <a target="_blank" href="/resume">
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
