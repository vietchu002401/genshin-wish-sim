import React from "react"
import "./ui.scss"

import normalBanner from "../../assets/ui/wanderlust.png"
import ganyuBanner from "../../assets/ui/ganyu.png"
import kleeBanner from "../../assets/ui/kokomi.png"

const Ui = ({changeBanner})=>{
    return(
        <div className="ui">
            <img onClick={()=> changeBanner("ganyu")} className="ui-banner" alt="" src={ganyuBanner}/>
            <img onClick={()=> changeBanner("klee")} className="ui-banner" alt="" src={kleeBanner}/>
            {/* <img onClick={()=> changeBanner("normal")} className="ui-banner" alt="" src={normalBanner}/> */}
        </div>
    )
}

export default Ui