import React, { useState } from "react";
import like from "./../../images/Heart.png";
import liveBtn from "./../../images/live-fill.png";
import playBtn from "./../../images/play-fill.png";
import trendingVideos from "../../demoData/trendingVideos";

function CardList() {
  const [items, setitems] = useState(trendingVideos);

  return (
    <>
      <div className="card-list">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-img">
              <img src={item.songImg} alt="" />
            </div>
            <div className="card-details">
              <img src={item.ArtistImg} alt="" />
              <div className="card-text">
                <h3>{item.song}</h3>
                <p>{item.Artist}</p>
              </div>
              <div className="card-like">
                <img src={like} alt="like" />
                <p>{item.like}</p>
              </div>
            </div>
            <div className="card-button">
              <div className="btn-one">
                <img src={liveBtn} alt="Live" />
                <h2>View Video</h2>
              </div>

              <div className="btn-two">
                <img src={playBtn} alt="play" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardList;
