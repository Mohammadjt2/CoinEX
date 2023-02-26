import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Brightness2OutlinedIcon from "@mui/icons-material/Brightness2Outlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar-menu">
        <img
          src="../../../Images/Logo/CoinEx_logo_-_horizontal_version_(default_color)_(4) 1.png"
          alt="logo"
        />
        <ul className="NavBar-menu-ul">
          <li>Market</li>
          <li>Flat</li>
          <li>Swap</li>
          <li>Futures</li>
          <li className="NavBar-menu-ul-li">
            <span>Finance</span>
            <span className="NavBar-arrow-icon">
              <KeyboardArrowDownIcon fontSize="small" />
            </span>
          </li>
          <li className="NavBar-menu-ul-li">
            <span>Promotion</span>
            <span className="NavBar-arrow-icon">
              <KeyboardArrowDownIcon fontSize="small" />
            </span>
          </li>
        </ul>
      </div>
      <div className="NavBar-signUp">
        <div className="NavBar-button">
          <button className="NavBar-button-logIn">Log In</button>
          <button className="NavBar-button-signUp">Sign UP</button>
        </div>
        <div className="NavBar-signUp-icon">
          <VolumeUpOutlinedIcon />
          <Brightness2OutlinedIcon />
          <CloudDownloadOutlinedIcon />
        </div>
        <div className="NavBar-signUp-language">
          <span>English/USDT</span>
          <span className="NavBar-arrow-icon">
            <KeyboardArrowDownIcon fontSize="small" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
