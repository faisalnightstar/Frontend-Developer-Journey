import { Link } from "react-router-dom";
import styles from "./MenuDiv.module.css";

const MenuDiv = () => {
  return (
    <div className={styles["list-div"]}>
      <ul className={styles["right-menu"]}>
        <li className={styles["navbar-list"]}>
          <Link to="/" className={styles["navbar-anchor-tag"]}>
            Home
          </Link>
        </li>
        <li className={styles["navbar-list"]}>
          <Link to="/project" className={styles["navbar-anchor-tag"]}>
            Project
          </Link>
        </li>
        <li className={styles["navbar-list"]}>
          <Link to="/about" className={styles["navbar-anchor-tag"]}>
            About
          </Link>
        </li>

        <li className={styles["navbar-list"]}>
          <Link to="/contact" className={styles["navbar-anchor-tag"]}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default MenuDiv;
