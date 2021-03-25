import Head from "next/head";
import Header from "./Header";
import NavBar from "./NavBar";

const Layout = (props) => (

    <div className="Layout">
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