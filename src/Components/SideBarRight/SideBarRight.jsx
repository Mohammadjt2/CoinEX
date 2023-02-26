import React, { useState } from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

import "./SideBarRight.css";

function SideBarRight() {
  const [bid, setBid] = useState();
  const [ask, setAsk] = useState();

  const ws = new WebSocket("wss://api.exirpro.ir:2023/?market=BTCUSDT");
  ws.onmessage = function (e) {
    const response = JSON.parse(e.data);
    const bids = response.bid;
    const asks = response.ask;
    setBid(bids);
    setAsk(asks);
  };

  return (
    <div className="SideBarRight">
      <div className="SideBarRight-range">
        <span className="SideBarRight-range-success">25.84%</span>
        <span className="SideBarRight-range-danger">74.16%</span>
      </div>
      <div className="SideBarRight-col">
        <div className="SideBarRight-market">
          <div className="SideBarRight-data-title">
            <span>Price(USDT)</span>
          </div>
          {bid !== undefined ? (
            bid.map((price, index) => (
              <span className="SideBarRight-descending" key={index}>
                {price[0]}
              </span>
            ))
          ) : (
            <span className="SideBarRight-descending"></span>
          )}
        </div>
        <div className="SideBarRight-price">
          <div className="SideBarRight-data-title">
            <span>Amouunt(BTC)</span>
          </div>
          {bid !== undefined ? (
            bid.map((amouunt, index) => (
              <span className="SideBarRight-descending" key={index}>
                {amouunt[1]}
              </span>
            ))
          ) : (
            <span className="SideBarRight-descending"></span>
          )}
        </div>
        <div className="SideBarRight-change">
          <div className="SideBarRight-data-title">
            <span>Total(BTC)</span>
          </div>
          <div className="SideBarRight-total-number">
            <span
              className="SideBarRight-total-bg-descending"
              style={{ width: "170px" }}
            ></span>
            <span className="SideBarRight-total">6.5496542</span>
          </div>
          <div className="SideBarRight-total-number">
            <span
              className="SideBarRight-total-bg-descending"
              style={{ width: "100px" }}
            ></span>
            <span className="SideBarRight-total">6.5496542</span>
          </div>
          <div className="SideBarRight-total-number">
            <span
              className="SideBarRight-total-bg-descending"
              style={{ width: "130px" }}
            ></span>
            <span className="SideBarRight-total">6.5496542</span>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-descending"
                style={{ width: "20px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-descending"
                style={{ width: "80px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-descending"
                style={{ width: "90px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-descending"
                style={{ width: "60px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-descending"
                style={{ width: "40px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-descending"
                style={{ width: "190px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-descending"
                style={{ width: "70px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-descending"
                style={{ width: "90px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-descending"
                style={{ width: "110px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-descending"
                style={{ width: "140px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-descending"
                style={{ width: "50px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-descending"
                style={{ width: "70px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-descending"
                style={{ width: "30px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-descending"
                style={{ width: "80px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-descending"
                style={{ width: "50px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-descending"
                style={{ width: "10px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-descending"
                style={{ width: "250px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
        </div>
      </div>
      <div className="SideBarRight-center">
        <span>
          <div className="SideBarRight-center-ascending">24,593,64</div>
          <div className="SideBarRight-center-descending">~24,628,71 USD</div>
        </span>
        <span>index: 24632.11</span>
        <span>
          <KeyboardArrowRightOutlinedIcon />
        </span>
      </div>
      <div className="SideBarRight-col">
        <div className="SideBarRight-market">
          {ask !== undefined ? (
            ask.map((price, index) => (
              <span className="SideBarRight-ascending" key={index}>
                {price[0]}
              </span>
            ))
          ) : (
            <span className="SideBarRight-ascending"></span>
          )}
        </div>
        <div className="SideBarRight-price">
          {ask !== undefined ? (
            ask.map((amouunt, index) => (
              <span className="SideBarRight-ascending" key={index}>
                {amouunt[1]}
              </span>
            ))
          ) : (
            <span className="SideBarRight-ascending"></span>
          )}
        </div>
        <div className="SideBarRight-change">
          <div className="SideBarRight-total-number">
            <span
              className="SideBarRight-total-bg-ascending"
              style={{ width: "170px" }}
            ></span>
            <span className="SideBarRight-total">6.5496542</span>
          </div>
          <div className="SideBarRight-total-number">
            <span
              className="SideBarRight-total-bg-ascending"
              style={{ width: "100px" }}
            ></span>
            <span className="SideBarRight-total">6.5496542</span>
          </div>
          <div className="SideBarRight-total-number">
            <span
              className="SideBarRight-total-bg-ascending"
              style={{ width: "130px" }}
            ></span>
            <span className="SideBarRight-total">6.5496542</span>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-ascending"
                style={{ width: "20px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-ascending"
                style={{ width: "80px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-ascending"
                style={{ width: "90px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-ascending"
                style={{ width: "60px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-ascending"
                style={{ width: "40px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-ascending"
                style={{ width: "190px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-ascending"
                style={{ width: "70px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-ascending"
                style={{ width: "90px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-ascending"
                style={{ width: "110px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-ascending"
                style={{ width: "140px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-ascending"
                style={{ width: "50px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-ascending"
                style={{ width: "70px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-ascending"
                style={{ width: "30px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-ascending"
                style={{ width: "80px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-ascending"
                style={{ width: "50px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-ascending"
                style={{ width: "10px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
          <div>
            <div className="SideBarRight-total-number">
              <span
                className="SideBarRight-total-bg-ascending"
                style={{ width: "250px" }}
              ></span>
              <span className="SideBarRight-total">6.5496542</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarRight;
