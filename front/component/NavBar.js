import styles from "../styles/NavBar.module.scss"
import HamburgerMenu from "./Hamburger";

const NavBar = () => {
    return(
    <div className={styles.MainNav}>
        <div className={styles.bigNav}>
            I'm a big Nav
        </div>
        <HamburgerMenu/>

    </div>)
}
export default NavBar;