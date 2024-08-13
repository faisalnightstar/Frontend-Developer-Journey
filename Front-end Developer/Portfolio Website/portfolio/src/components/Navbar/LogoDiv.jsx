import styles from "./LogoDiv.module.css";

const LogoDiv = () => {
  return (
    <div className={styles["logo-div"]}>
      <img className={styles["logo-image"]} src="../../Media/Logo.png" alt="" />
      <img
        className={styles["logo-text"]}
        src="../Media/text-logo.png"
        alt=""
      />
    </div>
  );
};
export default LogoDiv;
