import HorizontalSplitLayout from "../ui-components/layout/horizontal-split-layout/horizontal-split-layout";
import Header from "../ui-components/header/header";
import logo from "../asset/brain2.png"
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {Rootstate} from "../redux/root-reducers";
import {SocialLoginState} from "../component/login-form/social-login.reducer";

const Dashboard = () => {
    return (
        <HorizontalSplitLayout
            top={
            <Header img={logo} right={true}>Savoir Developpé </Header>
            }
            bottom={<div> Dashboard </div>}/>
    )
}
export default Dashboard