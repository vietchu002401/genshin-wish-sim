import React from "react"
import "./banner.scss"

import normal from "../../assets/banners/wanderlust-invocation.png"
import ganyu from "../../assets/banners/adrift-in-the-harbor.png"
import klee from "../../assets/banners/drifting-luminescence.png"

const Banner = ({image, count})=>{

    let [src, setSrc] = React.useState(ganyu)

    React.useEffect(()=>{
        if(image === "ganyu"){
            setSrc(ganyu)
            return
        }
        if(image === "klee"){
            setSrc(klee)
            return
        }
        setSrc(normal)
    },[image])
    
    return(
        <div className="main-banner">
            <img alt="" src={src} />
            <h1>{count}</h1>
        </div>
    )
}

export default Banner;