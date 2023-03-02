import style from "./Project.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
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
  livePreview?: string;
  id: number;
};
const Project = ({
  backgroundImageSrc,
  projectTitle,
  projectDescription,
  technologiesUsed,
  repositoryLink,
  livePreview,
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
          <div className={style["links-wrapper"]}>
            <a
              href={repositoryLink}
              aria-label="project repository link"
              target="_blank"
              className={style["github-logo__wrapper"]}
            >
              <FontAwesomeIcon size="xl" icon={faGithub}></FontAwesomeIcon>
            </a>
            {livePreview && (
              <a
                href={livePreview}
                aria-label="project live preview"
                target="_blank"
                className={style["github-logo__wrapper"]}
              >
                <FontAwesomeIcon
                  size="xl"
                  icon={faArrowUpRightFromSquare}
                ></FontAwesomeIcon>
              </a>
            )}
          </div>
        </div>
        <p className={style["project-description"]}>{projectDescription}</p>
        <ul className={style["technologies-used"]}>{technologiesDisplay}</ul>
      </div>
    </>
  );
};

export default Project;
