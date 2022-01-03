import React from "react";
import "./double-layout.scss"

type DoubleLayoutProps = {
    left: React.ReactNode
    right:React.ReactNode
}

const DoubleLayout = ({left, right}: DoubleLayoutProps) => {
    return (
        <div className="double-layout-main">
            <div className="double-layout-left">{left}</div>
            <div className="double-layout-right">{right}</div>
        </div>)
}
export default DoubleLayout