import styles from "./LogoDiv.module.css";

const LogoDiv = () => {
  return (
    <div className={styles["logo-div"]}>
      <img
        className={styles["logo-image"]}
        src="../src/assets/logo.png"
        alt="logo"
      />
      <img
        className={styles["logo-text"]}
        src="../src/assets/text-logo.png"
        alt="text logo"
      />
    </div>
  );
};
export default LogoDiv;
