import React from "react";
// import { ethers } from "ethers";
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

  return (
    <>
      <div className="top-search-bar">
        <div className="search-box">
          <img src={back} alt="back" />
          <div className="search-bar">
            <img src={search} alt="search" className="search-icon" />
            <input
              type="text"
              placeholder="Search for Artists, Videos, or Genres"
            />
            <img src={mic} alt="mic" className="mic-icon" />
          </div>
        </div>

        <div className="connect-button" onClick={connectWallet}>
          <img src={wallet} alt="img" />
          <h2 id="connect">Connect Wallet</h2>
        </div>
      </div>
    </>
  );
}

export default TopSearchBar;
