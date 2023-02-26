import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

import "./SideBarLeft.css";

function SideBarLeft() {
  return (
    <div>
      <div className="SideBarLeft">
        <div className="SideBarLeft-search">
          <SearchOutlinedIcon fontSize="small" />
          <input type="search" placeholder="Search" />
        </div>
        <div className="SideBarLeft-menu">
          <span className="SideBarLeft-menu-active">All</span>
          <span>Margin</span>
          <span>AMM</span>
          <span>NFTFI</span>
          <span>Web3</span>
          <span>DEFI</span>
        </div>
        <div className="SideBarLeft-title">
          <div className="SideBarLeft-market">
            <div className="SideBarLeft-data-title">
              <span>Market</span>
              <span className="SideBarLeft-title-icon">
                <SyncOutlinedIcon fontSize="small" />
              </span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">BTC/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">APE/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">ETH/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">ALGO/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">CHZ/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">APE/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">BNB/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">DOGE/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">NEAR/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">ETC/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">ROSE/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">APE/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">XTZ/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">FIL/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">ADA/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">DYDX/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">AAVE/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">OGN/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">APE/USDT</span>
            </div>
            <div className="SideBarLeft-data-market">
              <span className="SideBarLeft-data-market-star">
                <StarOutlinedIcon />
              </span>
              <span className="SideBarLeft-market-text">OP/USDT</span>
            </div>
          </div>
          <div className="SideBarLeft-price">
            <div className="SideBarLeft-data-title">
              <span>Price</span>
              <span className="SideBarLeft-title-icon">
                <SyncOutlinedIcon fontSize="small" />
              </span>
            </div>
            <span className="SideBarLeft-descending">24,593,64</span>
            <span className="SideBarLeft-descending">24,593,64</span>
            <span className="SideBarLeft-descending">24,593,64</span>
            <span className="SideBarLeft-ascending">24,593,64</span>
            <span className="SideBarLeft-ascending">24,593,64</span>
            <span className="SideBarLeft-descending">24,593,64</span>
            <span className="SideBarLeft-ascending">24,593,64</span>
            <span className="SideBarLeft-descending">24,593,64</span>
            <span className="SideBarLeft-ascending">24,593,64</span>
            <span className="SideBarLeft-descending">24,593,64</span>
            <span className="SideBarLeft-ascending">24,593,64</span>
            <span className="SideBarLeft-descending">24,593,64</span>
            <span className="SideBarLeft-ascending">24,593,64</span>
            <span className="SideBarLeft-descending">24,593,64</span>
            <span className="SideBarLeft-ascending">24,593,64</span>
            <span className="SideBarLeft-descending">24,593,64</span>
            <span className="SideBarLeft-ascending">24,593,64</span>
            <span className="SideBarLeft-descending">24,593,64</span>
            <span className="SideBarLeft-ascending">24,593,64</span>
            <span className="SideBarLeft-ascending">24,593,64</span>
            <span className="SideBarLeft-descending">24,593,64</span>
            <span className="SideBarLeft-ascending">24,593,64</span>
          </div>
          <div className="SideBarLeft-change">
            <div className="SideBarLeft-data-title">
              <span>24H Change</span>
              <span className="SideBarLeft-title-icon">
                <SyncOutlinedIcon fontSize="small" />
              </span>
            </div>
            <span className="SideBarLeft-descending">0.77 %</span>
            <span className="SideBarLeft-descending">0.77 %</span>
            <span className="SideBarLeft-descending">0.77 %</span>
            <span className="SideBarLeft-ascending">0.77 %</span>
            <span className="SideBarLeft-ascending">0.77 %</span>
            <span className="SideBarLeft-descending">0.77 %</span>
            <span className="SideBarLeft-ascending">0.77 %</span>
            <span className="SideBarLeft-descending">0.77 %</span>
            <span className="SideBarLeft-ascending">0.77 %</span>
            <span className="SideBarLeft-descending">0.77 %</span>
            <span className="SideBarLeft-ascending">0.77 %</span>
            <span className="SideBarLeft-descending">0.77 %</span>
            <span className="SideBarLeft-ascending">0.77 %</span>
            <span className="SideBarLeft-descending">0.77 %</span>
            <span className="SideBarLeft-ascending">0.77 %</span>
            <span className="SideBarLeft-descending">0.77 %</span>
            <span className="SideBarLeft-ascending">0.77 %</span>
            <span className="SideBarLeft-descending">0.77 %</span>
            <span className="SideBarLeft-ascending">0.77 %</span>
            <span className="SideBarLeft-ascending">0.77 %</span>
            <span className="SideBarLeft-descending">0.77 %</span>
            <span className="SideBarLeft-ascending">0.77 %</span>
          </div>
        </div>
      </div>
      <div className="SideBarLeft">
        <h2 className="SideBarLeft-title">Latest Execution</h2>
        <div className="SideBarLeft-title">
          <div className="SideBarLeft-market">
            <div className="SideBarLeft-data-title">
              <span>Price(USDT)</span>
            </div>
            <span className="SideBarLeft-descending">24,677,16</span>
            <span className="SideBarLeft-ascending">24,677,16</span>
            <span className="SideBarLeft-ascending">24,677,16</span>
            <span className="SideBarLeft-ascending">24,677,16</span>
            <span className="SideBarLeft-ascending">24,677,16</span>
            <span className="SideBarLeft-ascending">24,677,16</span>
            <span className="SideBarLeft-descending">24,677,16</span>
            <span className="SideBarLeft-ascending">24,677,16</span>
            <span className="SideBarLeft-ascending">24,677,16</span>
            <span className="SideBarLeft-descending">24,677,16</span>
            <span className="SideBarLeft-descending">24,677,16</span>
            <span className="SideBarLeft-descending">24,677,16</span>
          </div>
          <div className="SideBarLeft-price">
            <div className="SideBarLeft-data-title">
              <span>Amouunt(BTC)</span>
            </div>
            <span className="SideBarLeft-amouunt">0.00055589</span>
            <span className="SideBarLeft-amouunt">0.00055589</span>
            <span className="SideBarLeft-amouunt">0.00055589</span>
            <span className="SideBarLeft-amouunt">0.00055589</span>
            <span className="SideBarLeft-amouunt">0.00055589</span>
            <span className="SideBarLeft-amouunt">0.00055589</span>
            <span className="SideBarLeft-amouunt">0.00055589</span>
            <span className="SideBarLeft-amouunt">0.00055589</span>
            <span className="SideBarLeft-amouunt">0.00055589</span>
            <span className="SideBarLeft-amouunt">0.00055589</span>
            <span className="SideBarLeft-amouunt">0.00055589</span>
            <span className="SideBarLeft-amouunt">0.00055589</span>
          </div>
          <div className="SideBarLeft-change">
            <div className="SideBarLeft-data-title">
              <span>Time</span>
            </div>
            <span className="SideBarLeft-time">17:21:14</span>
            <span className="SideBarLeft-time">17:21:14</span>
            <span className="SideBarLeft-time">17:21:14</span>
            <span className="SideBarLeft-time">17:21:14</span>
            <span className="SideBarLeft-time">17:21:14</span>
            <span className="SideBarLeft-time">17:21:14</span>
            <span className="SideBarLeft-time">17:21:14</span>
            <span className="SideBarLeft-time">17:21:14</span>
            <span className="SideBarLeft-time">17:21:14</span>
            <span className="SideBarLeft-time">17:21:14</span>
            <span className="SideBarLeft-time">17:21:14</span>
            <span className="SideBarLeft-time">17:21:14</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarLeft;
