import React from "react"
import background from "../../assets/videos/background-wish.mp4"
import "./background.scss"

const Background = ()=>{
    return(
        <div className="bg">
            <video type="video/mp4" src={background} muted autoPlay loop preload="auto"/>
        </div>
    )
}

export default Background