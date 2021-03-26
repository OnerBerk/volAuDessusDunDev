import Head from "next/head";
import styles from "../styles/layout.module.scss"

import Header from "./header";
import NavBar from "./navBar";

const Layout = (props) => (

    <div className={styles.mainLayout}>
        <Head>
            <title> Mon App {props.title} </title>
        </Head>
        <NavBar/>
        <Header/>
        <div className="Content">
            {props.children}
        </div>

    </div>
)

export default Layout;