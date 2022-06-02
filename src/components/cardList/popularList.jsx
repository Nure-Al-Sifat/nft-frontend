import React, { useState } from "react";
import like from "./../../images/Heart.png";
import popularGenres from "../../demoData/popularGenres";
import chevronRight from "./../../images/chevron-right.png";

function PopularList() {
  const [items] = useState(popularGenres);

  return (
    <>
      <div className="card-list">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-img">
              <img src={item.img} alt="" />
            </div>
            <div className="card-details">
              <div className="card-text">
                <h3>{item.type}</h3>
                <p>{item.amount}</p>
              </div>
              <div className="card-like">
                <img src={like} alt="like" />
                <p>{item.like}</p>
              </div>
            </div>
            <div className="card-button">
              <div className="browse-btn">
                <h2>Browse</h2>
                <img src={chevronRight} alt="Live" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PopularList;
