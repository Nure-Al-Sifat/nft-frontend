import React from 'react'
import './CardList.css';
import like from './../../images/Heart.png';
import liveBtn from './../../images/live-fill.png';
import playBtn from './../../images/play-fill.png';
import songImg from './../../images/baby-img.png';
import artistImg from './../../images/baby-pp.png';

function CardList() {

    const cardItem=[
        {
            song:"Baby",
            Artist:"Justin Bieber",
            like:"44",
            ArtistImg: artistImg,
            songImg: songImg
        },
        {
            song:"Baby",
            Artist:"Justin Bieber",
            like:"33",
            ArtistImg: artistImg
        },
        {
            song:"Baby",
            Artist:"Justin Bieber",
            like:"98",
            ArtistImg: artistImg
        }
    ]
  return (
    <>
        <div className="card-list">
            {
                cardItem.map((item, index)=>(
                    <div className="card">
                    <div className="card-img">
                        <img src={songImg} alt=""/>
                    </div>
                    <div className="card-details">
                        <img src={item.ArtistImg}/>
                        <div className="card-text">
                            <h3>{item.song}</h3>
                            <p>{item.Artist}</p>
                        </div>
                        <div className="card-like">
                            <img src={like} alt="like"/>
                            <p>{item.like}</p>
                        </div>
                    </div>
                    <div className="card-button">

                            <div className="btn-one">
                                <img src={liveBtn} alt="Live"/>
                                <h2>View Video</h2>
                            </div>
                        
                            <div className="btn-two">
                                <img src={playBtn} alt="play"/>
                            </div>
                        
                    </div>
                </div> 
                ))
            }
              
        </div>
    </>
  )
}

export default CardList