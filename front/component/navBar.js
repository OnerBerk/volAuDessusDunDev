import styles from "../styles/navBar.module.scss"
import HamburgerMenu from "./hamburger";
import Link from "next/link";

const NavBar = () => {
    return(
    <div className={styles.MainNav}>
        <div>
            <ul className={styles.menuNav}>
                <li><Link href="/" ><a> Home </a></Link></li>
                <li><Link href="/about" ><a> About </a></Link></li>
                <li><Link href="/contact" ><a> Contact </a></Link></li>
            </ul>
        </div>
        <HamburgerMenu/>

    </div>)
}
export default NavBar;