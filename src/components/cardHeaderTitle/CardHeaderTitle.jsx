import React from "react";
import chevronRight from "./../../images/chevron-right.png";
import chevronLeft from "./../../images/chevron-left-2.png";

function CardHeaderTitle(props) {
  return (
    <>
      <div className="card-header-title">
        <h2>{props.HeaderTitle}</h2>
        <div className="arrow-box">
          <div className="arrow">
            <img src={chevronRight} alt="Left" />
          </div>
          <div className="arrow">
            <img src={chevronLeft} alt="Left" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHeaderTitle;
