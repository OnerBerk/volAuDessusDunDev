import React from "react";
import "./layout.scss"

type LayoutProps={
    children:React.ReactNode
}

const Layout = ({children}:LayoutProps) => {
    return(
    <div className="layout-main">{children}</div>)
}
export default Layout