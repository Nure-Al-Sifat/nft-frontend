import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", [0]);
    const signer = provider.getSigner();
    const account = await signer.getAddress();

    if (account) {
      let item = {
        profileImg: "assets/profile-img.png",
        name: "John Doe",
        link: "View profile",
        quilatyImg: "assets/premium.png",
      };
      setProfile(item);
    }
  };

  const navItem = [
    {
      path: "/",
      icon: "assets/Home.png",
      name: "Home",
    },
    {
      path: "/Charts",
      icon: "assets/list-ordered.png",
      name: "Chart",
    },
    {
      path: "/favorites",
      icon: "assets/Heart-2.png",
      name: "Favorites",
    },
    {
      path: "/playlists",
      icon: "assets/Play.png",
      name: "My Playlists",
    },
    {
      path: "/collections",
      icon: "assets/layers.png",
      name: "Collections",
    },
    {
      path: "/settings",
      icon: "assets/Setting.png",
      name: "Settings",
    },
  ];
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-img">
          <img src="assets/WEB3HORI.png" alt="logo" />
          <div className="sidebar-line"></div>
        </div>
        <div className="profile-box">
          <img src={profile.profileImg} alt="" />
          <div>
            <div className="profile-box-content">
              <h3>{profile.name}</h3>
              <p>{profile.link}</p>
              <img src={profile.quilatyImg} alt="" />
            </div>
          </div>

          <div className="side-nav-link">
            {navItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="link">
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
