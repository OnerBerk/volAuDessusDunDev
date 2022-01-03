import React from "react";
import "./horizontal-split-layout.scss"

type HorizontalLayoutProps = {
    top: React.ReactNode
    bottom:React.ReactNode
}


const HorizontalSplitLayout=({top,bottom}:HorizontalLayoutProps)=>{
return(
    <div className="horizontal-layout-main">
        <div className="horizontal-layout-top">{top}</div>
        <div className="horizontal-layout-bottom">{bottom}</div>
    </div>
)
}
export default HorizontalSplitLayout