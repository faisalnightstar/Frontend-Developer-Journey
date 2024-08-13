import { FaRegFilePdf } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { IconContext } from "react-icons";
import styles from "./ButtonContainer.module.css";

const ButtonContainer = () => {
  return (
    <>
      <div className={styles["buttons-container"]}>
        <a
          className={styles["btn-anchor-tag"]}
          href="Media/Faisal resume.PDF"
          target="_blank"
        >
          <button className={styles["btn"]}>
            <IconContext.Provider
              value={{
                className: "global-class-name",
                size: "1em",
              }}
            >
              <FaRegFilePdf />
            </IconContext.Provider>

            <span className={styles["btn-text"]}>Resume</span>
          </button>
        </a>

        <a
          className={styles["btn-anchor-tag"]}
          href="https://www.linkedin.com/in/faisalnightstar/"
          target="_blank"
        >
          <button className={styles["btn"]}>
            <IconContext.Provider
              value={{
                className: "global-class-name",
                size: "1em",
              }}
            >
              <FiLinkedin />
            </IconContext.Provider>

            <span className={styles["btn-text"]}>LinkedIn</span>
          </button>
        </a>
        <a
          className={styles["btn-anchor-tag"]}
          href="https://github.com/faisalnightstar"
          target="_blank"
        >
          <button className={styles["btn"]}>
            <IconContext.Provider
              value={{
                className: "global-class-name",
                size: "1em",
              }}
            >
              <FaGithub />
            </IconContext.Provider>
            <span className={styles["btn-text"]}>Github</span>
          </button>
        </a>

        <a
          className={styles["btn-anchor-tag"]}
          href="https://x.com/faisalnightstar"
        >
          <button className={styles["btn"]}>
            {" "}
            <IconContext.Provider
              value={{
                className: "global-class-name",
                size: "1em",
              }}
            >
              <FaXTwitter />
            </IconContext.Provider>
            <span className={styles["btn-text"]}>Twitter</span>
          </button>
        </a>
      </div>
    </>
  );
};
export default ButtonContainer;
