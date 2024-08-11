import styles from "./NavbarContainer.module.css";
import LogoDiv from "./components/Navbar/LogoDiv";
import MenuDiv from "./components/Navbar/MenuDiv";

const NavbarContainer = (Props) => {
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
