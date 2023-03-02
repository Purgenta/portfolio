import { useState } from "react";
import style from "./Navigation.module.css";
const Navigation = () => {
  const [navActive, setNavActive] = useState(false);
  return (
    <nav className={style["main-nav"]}>
      <div className={style["logo"]}>
        <div className={style["logo-wrapper"]}></div>
        <h2 className={style["dev-name"]}>Nikola Todorovic</h2>
      </div>
      <div
        className={`${style["navigation"]} ${navActive ? style["active"] : ""}`}
        onClick={() => setNavActive(false)}
      >
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
      </div>
      <button
        aria-label="toggle-menu"
        onClick={() => setNavActive((prev) => !prev)}
        className={`${style["hamburger"]} ${navActive ? style["active"] : ""}`}
      >
        <span className={style["hamburger-line"]}></span>
        <span className={style["hamburger-line"]}></span>
        <span className={style["hamburger-line"]}></span>
      </button>
    </nav>
  );
};

export default Navigation;
