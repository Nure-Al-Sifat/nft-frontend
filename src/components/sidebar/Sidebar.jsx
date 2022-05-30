import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import logo from "./../../images/WEB3HORI.png";
import profile from "./../../images/profile-img.png";
import premium from "./../../images/premium.png";
import homeIcon from "./../../images/Home.png";
import chart from "./../../images/list-ordered.png";
import likes from "./../../images/Heart-2.png";
import Play from "./../../images/Play.png";
import layers from "./../../images/layers.png";
import Setting from "./../../images/Setting.png";

function Sidebar() {
  const navItem = [
    {
      path: "/",
      icon: homeIcon,
      name: "Home",
    },
    {
      path: "/Charts",
      icon: chart,
      name: "Chart",
    },
    {
      path: "/favorites",
      icon: likes,
      name: "Favorites",
    },
    {
      path: "/playlists",
      icon: Play,
      name: "My Playlists",
    },
    {
      path: "/collections",
      icon: layers,
      name: "Collections",
    },
    {
      path: "/settings",
      icon: Setting,
      name: "Settings",
    },
  ];
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-img">
          <img src={logo} alt="logo" />
          <div className="sidebar-line"></div>
        </div>
        <div className="profile-box">
          <img src={profile} alt="" />
          <div>
            <div className="profile-box-content">
              <h3>John Doe</h3>
              <p>View profile</p>
              <img src={premium} alt="" />
            </div>
          </div>

          <div className="side-nav-link">
            {navItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassName="active"
              >
                <div className="nav-box">
                  <img src={item.icon} alt="" />
                  <h3>{item.name}</h3>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
