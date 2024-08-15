import styles from "./FooterContainer.module.css";
import Copyright from "./Copyright";
const FooterContainer = () => {
  return (
    <footer className={styles["footer-container"]}>
      <Copyright></Copyright>
    </footer>
  );
};
export default FooterContainer;
