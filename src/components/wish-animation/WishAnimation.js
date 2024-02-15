import React from "react"
import "./wish-animation.scss"

import goldWish from "../../assets/videos/5starwish.mp4"
import purpleWish from "../../assets/videos/4starwish.mp4"

import goldWishSingle from "../../assets/videos/5starwish-single.mp4"
import purpleWishSingle from "../../assets/videos/4starwish-single.mp4"
import blueWishSingle from "../../assets/videos/3starwish-single.mp4"

const WishAnimation = ({is5Star10, is4Star10, is3Star, is4Star1, is5Star1})=>{

    return (
        <div className="wish-ani">
            {is5Star10 && <video src={goldWish} muted autoPlay/>}
            {is4Star10 && <video src={purpleWish} muted autoPlay/>}

            {is5Star1 && <video src={goldWishSingle} muted autoPlay/>}
            {is4Star1 && <video src={purpleWishSingle} muted autoPlay/>}
            {is3Star && <video src={blueWishSingle} muted autoPlay/>}
        </div>
    )
}

export default WishAnimation;