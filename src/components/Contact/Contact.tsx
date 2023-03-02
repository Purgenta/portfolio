import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Contact.module.css";
import { motion, Variants } from "framer-motion";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const variants: Variants = {
  initial: {
    height: 0,
  },
  visible: {
    height: "auto",
    transition: {
      duration: 0.8,
      when: "beforeChildren",
    },
  },
};
const socialLinksVariants: Variants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
const socialLinkVariant = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Contact = () => {
  return (
    <>
      <motion.section
        id="contact"
        variants={variants}
        initial="initial"
        animate="visible"
        className={style["contact"]}
      >
        <motion.ul
          variants={socialLinksVariants}
          className={style["contact-links"]}
        >
          <motion.li
            variants={socialLinkVariant}
            className={style["social-media__link"]}
          >
            <a
              aria-label="linkedin"
              href="https://www.linkedin.com/in/nikola-todorovic-b08b14247/"
              target="_blank"
            >
              <FontAwesomeIcon size="2xl" icon={faLinkedin} />
            </a>
          </motion.li>
          <motion.li
            variants={socialLinkVariant}
            className={style["social-media__link"]}
          >
            <a
              aria-label="github"
              href="https://github.com/Purgenta"
              target="_blank"
            >
              <FontAwesomeIcon size="2xl" icon={faGithub} />
            </a>
          </motion.li>
          <motion.li
            variants={socialLinkVariant}
            className={style["social-media__link"]}
          >
            <a aria-label="send email" href="mailto:ntodorovic1300@gmail.com">
              <FontAwesomeIcon size="2xl" icon={faEnvelope} />
            </a>
          </motion.li>
        </motion.ul>
        <div className={style["bottom-line"]}></div>
      </motion.section>
    </>
  );
};

export default Contact;
