import styles from "./LogoDiv.module.css";

const LogoDiv = () => {
  return (
    <div className={styles["logo-div"]}>
      <img className={styles["logo-image"]} src="../Media/Logo.png" alt="" />
      <a className={styles["logo-text"]}>Faisal's Portfolio</a>
    </div>
  );
};
export default LogoDiv;
