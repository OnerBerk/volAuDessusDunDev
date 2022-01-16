import React from "react";
import "./header.scss"

type HeaderProps = {
    img: string
    children: React.ReactNode
    right?: React.ReactNode
}

const Header = ({img, children, right}: HeaderProps) => {
    return (
        <div className="header-main">
            <div className="header-logo"><img alt="logo mechanicme cerveau" src={img}/></div>
            <div className="header-children"> {children}</div>
            <div className="header-right">{right ? children : ""}</div>
        </div>
    )
}
export default Header