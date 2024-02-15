import React from "react";
import "./wish-button.scss";
import btn from "../../assets/ui/wish-button.png";

const WishButton = ({ wish10, wish1, openHistory }) => {
  return (
    <div className="foot">
      <div className="foot-history">
        <div onClick={()=> openHistory()} className="btn-history btn">
          <p>History</p>
          <img src={btn} alt="" />
        </div>
      </div>
      <div className="foot-wish">
        <div onClick={() => wish1()} className="btn">
          <p>Wish 1</p>
          <img src={btn} alt="" />
        </div>
        <div onClick={() => wish10()} className="btn">
          <p>Wish 10</p>
          <img src={btn} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WishButton;
