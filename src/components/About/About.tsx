import style from "./About.module.css";
import { motion, Variants } from "framer-motion";
const variants: Variants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};
const techStack: Variants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
};
type TechStackItem = {
  name: string;
  id: number;
};
const techStackItems: TechStackItem[] = [
  { name: "HTML", id: 1 },
  { name: "CSS", id: 2 },
  { name: "Javascript", id: 3 },
  { name: "React", id: 4 },
  { name: "MySQL", id: 5 },
  { name: "Express", id: 6 },
  { name: "Typescript", id: 7 },
];
const About = () => {
  const techItemsDisplay = techStackItems.map((item) => {
    return (
      <motion.li
        key={item.id}
        initial="initial"
        whileInView="visible"
        variants={techStack}
        className={style["technology-item"]}
      >
        {item.name}
      </motion.li>
    );
  });
  return (
    <motion.section
      id="about"
      variants={variants}
      initial="initial"
      animate="visible"
      className={style["about-me"]}
    >
      <div className={style["about-me__wrapper"]}>
        <h2 className={style["welcome"]}>
          Hi, I am Nikola and I{" "}
          <span className={style["welcome-highlighted"]}>build things</span>
        </h2>
        <p className={style["information"]}>
          I am a <span className={style["highlight"]}>fullstack developer</span>{" "}
          who specialises in building user interfaces and enjoys bringing
          interesting ideas to life.
        </p>
        <h3 className={style["tech-stack"]}>
          Here is what i mostly work with:
        </h3>
        <div className={style["stack-wrapper"]}>
          <ul className={style.stack}>{techItemsDisplay.slice(0, 4)}</ul>
          <ul className={style.stack}>
            {techItemsDisplay.slice(4, techItemsDisplay.length)}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
