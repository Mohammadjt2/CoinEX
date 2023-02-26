import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";

import "./TopBar.css";

function TopBar() {
  return (
    <div className="TopBar">
      <div className="TopBar-left">
        <div className="TopBar-Bitcoin-text">
          <span className="TopBar-Bitcoin">
            <CurrencyBitcoinOutlinedIcon />
          </span>
          <div>
            <span className="TopBar-btc">BTC/USDT</span>
            <span className="TopBar-arrow-icon">
              <KeyboardArrowDownIcon />
            </span>
          </div>
        </div>
        <span className="TopBar-active">24,596,34</span>
      </div>
      <div className="TopBar-center">
        <span>
          <div className="TopBar-center-title">24H Change</div>
          <div className="TopBar-active">+0.23%</div>
        </span>
        <span>
          <div className="TopBar-center-title">24H Highest</div>
          <div>24897.14</div>
        </span>
        <span>
          <div className="TopBar-center-title">24H Lowest</div>
          <div>24428.93</div>
        </span>
        <span>
          <div className="TopBar-center-title">24H Volume</div>
          <div>244.19</div>
        </span>
        <span>
          <div className="TopBar-center-title">24H Value</div>
          <div>6.01M</div>
        </span>
      </div>
      <div className="TopBar-right TopBar-active">
        <span>
          <HistoryEduOutlinedIcon />
        </span>
        <span>Read about Bitcoin</span>
      </div>
    </div>
  );
}

export default TopBar;
