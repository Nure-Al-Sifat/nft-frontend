import React from 'react'
import './Sidebar.css';
import logo from './../../images/WEB3HORI.png';
import profile from './../../images/profile-img.png';
import premium from './../../images/premium.png';
import homeIcon from './../../images/Home.png';
import chart from './../../images/list-ordered.png';
import likes from './../../images/Heart-2.png';
import Play from './../../images/Play.png';
import layers from './../../images/layers.png';
import Setting from './../../images/Setting.png';

function Sidebar() {


    const navItem=[
    {
        icon:homeIcon,
        name:"Home"
        
    },
    {
      icon:chart,
      name:"Chart"
      
    },
    {
      icon:likes,
      name:"Favorites"
      
    },
    {
      icon:Play,
      name:"My Playlists"
      
    },
    {
      icon:layers,
      name:"Collections"
      
    },
    {
      icon:Setting,
      name:"Settings"
      
    }
    ]
  return (
    <>
      <div className="sidebar">
            <div className="sidebar-img">
                <img src={logo} alt="logo"/>
                <div className="sidebar-line"></div>
            </div>
            <div className="profile-box">
                    <img src={profile} alt=""/>
                    <div>
                        <div className="profile-box-content">
                            <h3>John Doe</h3>
                            <p>View profile</p>
                            <img src={premium} alt=""/>
                        </div>
                    </div>
                    

                    <div className="side-nav-link">
                    {
                      navItem.map((item, index) => (
                        <div className="nav-box" activeclassName="active" key={index}>
                          <img src={item.icon} alt=""/>
                          <h3>{item.name}</h3>
                        
                        </div>
                      ))
                    }
                    
                    </div>
                    
                </div>

        </div>
    </>
  )
}

export default Sidebar