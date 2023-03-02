import style from "./Projects.module.css";
import animeListPicture from "../../assets/AnimeList.png";
import Project from "./Project";
import { ProjectProps } from "./Project";
import { motion, Variants } from "framer-motion";
const projectVariant: Variants = {
  initial: {
    opacity: 0,
    x: "-10vw",
  },
  whileInView: {
    opacity: 1,
    x: "0vw",
    transition: {
      damping: 200,
    },
  },
};
type Technologies =
  | "HTML"
  | "CSS"
  | "Javascript"
  | "React"
  | "Express"
  | "Typescript";
const projects: ProjectProps[] = [
  {
    technologiesUsed: ["HTML", "CSS", "React", "Javascript"],
    repositoryLink: "https://github.com/Purgenta/animeList",
    projectTitle: "Anime List",
    projectDescription: "A remake of a popular website called MyAnimeList",
    livePreview: `https://tranquil-starburst-d562fc.netlify.app/`,
    id: 1,
    backgroundImageSrc: animeListPicture,
  },
];
const Projects = () => {
  const projectItemsDisplay = projects.map((project) => {
    return (
      <motion.li
        viewport={{ once: true, amount: 0.35 }}
        variants={projectVariant}
        initial="initial"
        whileInView="whileInView"
        key={project.id}
        className={style["project-item"]}
      >
        <Project
          projectDescription={project.projectDescription}
          projectTitle={project.projectTitle}
          id={project.id}
          backgroundImageSrc={project.backgroundImageSrc}
          technologiesUsed={project.technologiesUsed}
          repositoryLink={project.repositoryLink}
          livePreview={project.livePreview}
        ></Project>
      </motion.li>
    );
  });
  return (
    <section id="projects" className={style["projects"]}>
      <h2 className={style["my-projects"]}>
        These are the projects I've been working on thus far
      </h2>
      <ul className={style["project-list"]}>{projectItemsDisplay}</ul>
    </section>
  );
};

export default Projects;
