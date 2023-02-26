import React from "react";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PanoramaFishEyeOutlinedIcon from "@mui/icons-material/PanoramaFishEyeOutlined";

import "./Trading.css";

function Trading() {
  return (
    <div className="Trading">
      <div className="Trading-title">
        <span>Spot Trading</span>
        <span>Margin Trading x10</span>
      </div>
      <div className="Trading-top-content">
        <div className="Trading-top-content-button">
          <button>Limit</button>
          <button>Market</button>
          <button>Stop-Limit</button>
          <button>Stop-Market</button>
          <span>
            <ErrorOutlineRoundedIcon />
          </span>
        </div>
        <div className="Trading-top-content-advanced">
          <span>Advanced:</span>
          <span>
            <div>Al</div>
            <div className="Trading-top-content-advanced-icon">
              <KeyboardArrowDownRoundedIcon />
            </div>
          </span>
          <span>M</span>
          <span className="Trading-top-content-advanced-icon">
            <VisibilityOutlinedIcon />
          </span>
        </div>
        <div className="Trading-content">
          <div className="Trading-content-left">
            <div className="Trading-content-item">
              <span className="Trading-content-item-text">
                <span>Price</span>
                <span>|</span>
              </span>
              <span>USDT</span>
            </div>
            <div className="Trading-content-item">
              <span className="Trading-content-item-text">
                <span>Amount</span>
                <span>|</span>
              </span>
              <span>BTC</span>
            </div>
            <div className="Trading-content-range">
              <hr className="Trading-content-border" />
              <div className="Trading-content-circle-left">
                <span>
                  <PanoramaFishEyeOutlinedIcon />
                </span>
                <span>
                  <PanoramaFishEyeOutlinedIcon />
                </span>
                <span>
                  <PanoramaFishEyeOutlinedIcon />
                </span>
                <span>
                  <PanoramaFishEyeOutlinedIcon />
                </span>
              </div>
            </div>
            <div className="Trading-content-item">
              <span className="Trading-content-item-text">
                <span>Value</span>
                <span>|</span>
              </span>
              <span>USDT</span>
            </div>

            <div className="Trading-content-login">
              <span>Log in </span>
              <span>or </span>
              <span>Sign Up</span>
            </div>
          </div>
          <div className="Trading-content-right">
            <div className="Trading-content-item">
              <span className="Trading-content-item-text">
                <span>Price</span>
                <span>|</span>
              </span>
              <span>USDT</span>
            </div>
            <div className="Trading-content-item">
              <span className="Trading-content-item-text">
                <span>Amount</span>
                <span>|</span>
              </span>
              <span>BTC</span>
            </div>
            <div className="Trading-content-range">
              <hr className="Trading-content-border" />
              <div className="Trading-content-circle-right">
                <span>
                  <PanoramaFishEyeOutlinedIcon />
                </span>
                <span>
                  <PanoramaFishEyeOutlinedIcon />
                </span>
                <span>
                  <PanoramaFishEyeOutlinedIcon />
                </span>
                <span>
                  <PanoramaFishEyeOutlinedIcon />
                </span>
              </div>
            </div>
            <div className="Trading-content-item">
              <span className="Trading-content-item-text">
                <span>Value</span>
                <span>|</span>
              </span>
              <span>USDT</span>
            </div>

            <div className="Trading-content-login">
              <span>Log in </span>
              <span>or </span>
              <span>Sign Up</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trading;
