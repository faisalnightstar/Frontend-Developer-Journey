import styles from "./NavbarContainer.module.css";
import LogoDiv from "./LogoDiv";
import MenuDiv from "./MenuDiv";

const NavbarContainer = () => {
  return (
    <>
      <header className={styles["header"]}>
        <nav className={styles["nav"]}>
          <LogoDiv />

          <MenuDiv />
        </nav>
      </header>
    </>
  );
};

export default NavbarContainer;
