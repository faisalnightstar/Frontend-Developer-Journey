const MenuDiv = () => {
  return (
    <div className={styles["list-div"]}>
      <ul className={styles["right-menu"]}>
        <li className={styles["navbar-list"]}>
          <a className={styles["navbar-anchor-tag"]} href="#">Home</a>
        </li>
        <li className={styles["navbar-list"]}>
          <a className={styles["navbar-anchor-tag"]} target="_blank">Project</a>
        </li>
        <li className={styles["navbar-list"]}>
          <a className={styles["navbar-anchor-tag"]} href="about.html">About</a>
        </li>

        <li className={styles["navbar-list"]}>
          <a className={styles["navbar-anchor-tag"]} href="contact.html">Contact</a>
        </li>
      </ul>
    </div>
  );
};
export default MenuDiv;
