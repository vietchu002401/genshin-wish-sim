import React from "react";
import "./wishResult.scss";

import bg from "../../assets/bg/wish-background.jpg";
import bgResult from "../../assets/ui/background-result.png"

const WishResult = ({ displayProp, src, closeResult }) => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: displayProp,
      }}
      className="result"
    >
      {src.length === 1 ? (
        <img
          className="img-only"
          src={require(`../../assets/characters/${src[0]}`).default}
          alt=""
        />
      ) : (
        src.map((item, index) => {
          return (
            <div style={{background : `url(${bgResult})`, backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"}} className="field" key={index}>
              <img
                className="img-field"
                src={require(`../../assets/characters/${item}`).default}
                alt=""
              />
            </div>
          );
        })
      )}
      <h1 onClick={() => closeResult()}>Skip &gt;&gt;</h1>
    </div>
  );
};

export default WishResult;
