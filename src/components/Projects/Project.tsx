import style from "./Project.module.css";
import gitHubLogo from "../../assets/gitHubLogo.png";
type Technologies =
  | "HTML"
  | "CSS"
  | "Javascript"
  | "React"
  | "Express"
  | "Typescript";
export type ProjectProps = {
  backgroundImageSrc: string;
  technologiesUsed: Array<Technologies>;
  projectTitle: string;
  repositoryLink: string;
  projectDescription: string;
  id: number;
};
const Project = ({
  backgroundImageSrc,
  projectTitle,
  projectDescription,
  technologiesUsed,
  repositoryLink,
}: ProjectProps) => {
  const technologiesDisplay = technologiesUsed.map((value, key) => {
    return (
      <li key={key} className={style["technology-item"]}>
        {value}
      </li>
    );
  });
  return (
    <>
      <div className={style["image-wrapper"]}>
        <img alt={`${projectTitle} preview`} src={backgroundImageSrc}></img>
      </div>
      <div className={style["about-project"]}>
        <div className={style["project-wrapper"]}>
          <h3 className={style["project-title"]}>{projectTitle}</h3>
          <a
            href={repositoryLink}
            target="_blank"
            className={style["github-logo__wrapper"]}
          >
            <img alt="github" src={gitHubLogo}></img>
          </a>
        </div>
        <p className={style["project-description"]}>{projectDescription}</p>
        <ul className={style["technologies-used"]}>{technologiesDisplay}</ul>
      </div>
    </>
  );
};

export default Project;
