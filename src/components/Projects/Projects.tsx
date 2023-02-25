import style from "./Projects.module.css";
import { motion, Variants } from "framer-motion";
import animeListPicture from "../../assets/AnimeList.png";
import Project from "./Project";
import { ProjectProps } from "./Project";
const variants: Variants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
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
    id: 1,
    backgroundImageSrc: animeListPicture,
  },
];
const Projects = () => {
  const projectItemsDisplay = projects.map((project) => {
    return (
      <li key={project.id} className={style["project-item"]}>
        <Project
          projectDescription={project.projectDescription}
          projectTitle={project.projectTitle}
          id={project.id}
          backgroundImageSrc={project.backgroundImageSrc}
          technologiesUsed={project.technologiesUsed}
          repositoryLink={project.repositoryLink}
        ></Project>
      </li>
    );
  });
  return (
    <motion.section
      variants={variants}
      initial="initial"
      whileInView="visible"
      className={style["projects"]}
    >
      <h2 className={style["my-projects"]}>
        These are the projects I've been working on thus far
      </h2>
      <ul className={style["project-list"]}>{projectItemsDisplay}</ul>
    </motion.section>
  );
};

export default Projects;
