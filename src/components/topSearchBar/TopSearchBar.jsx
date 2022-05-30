import React from "react";
import { ethers } from "ethers";
import "./TopSearchBar.css";
import back from "./../../images/chevron-left.png";
import search from "./../../images/search-icon.png";
import mic from "./../../images/mic.png";
import wallet from "./../../images/Wallet.png";

function TopSearchBar() {
  const { ethers } = require("ethers");
  const connectWallet = async () => {
    const connectButton = document.getElementById("connect");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", [0]);
    const signer = provider.getSigner();
    const account = await signer.getAddress();
    console.log("Account:", await account);

    connectButton.innerHTML =
      account[0] +
      account[1] +
      account[2] +
      account[3] +
      account[4] +
      account[5] +
      "..." +
      account[38] +
      account[39] +
      account[40] +
      account[41];
  };
  const searchIcon = {
    width: "22px",
    height: "22px",
    left: "8px",
    top: "11px",
  };
  const micIcon = {
    width: "22px",
    height: "22px",
    left: "496px",
    top: "11px",
    cursor: "pointer",
  };

  const walletImg = {
    width: "26px",
    height: "26px",
    top: "9px",
  };
  return (
    <>
      <div className="top-search-bar">
        <div className="connect-button" onClick={connectWallet}>
          <img style={walletImg} src={wallet} alt="img" />
          <h2 id="connect">Connect Wallet</h2>
        </div>
        <img src={back} alt="back" />
        <div className="search-bar">
          <img
            src={search}
            style={searchIcon}
            alt="search"
            className="search-icon"
          />
          <input
            type="text"
            placeholder="Search for Artists, Videos, or Genres"
          />
          <img src={mic} style={micIcon} alt="mic" className="mic-icon" />
        </div>
      </div>
    </>
  );
}

export default TopSearchBar;
