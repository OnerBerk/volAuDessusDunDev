import {Navigate} from "react-router-dom";
import * as React from "react";
import {useSelector} from "react-redux";
import {Rootstate} from "../../redux/root-reducers";
import {LoginState} from "../../component/login-form/login.reducer";
import {useEffect} from "react";

type PublicRouteProps = {
    component: any
    path?: string
}

const PublicRoute = ({component: RouteComponent, path}: PublicRouteProps) => {
    const {payload} = useSelector<Rootstate, LoginState>((state) => state.login);
    const token = payload.token

    if (token === null) {
        return <RouteComponent/>
    }
    return <Navigate to="/"/>
}
export default PublicRoute