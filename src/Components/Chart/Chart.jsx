import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import AddIcon from "@mui/icons-material/Add";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ListIcon from "@mui/icons-material/List";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import TitleRoundedIcon from "@mui/icons-material/TitleRounded";
import PieChartOutlineRoundedIcon from "@mui/icons-material/PieChartOutlineRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import LoupeRoundedIcon from "@mui/icons-material/LoupeRounded";

import "./Chart.css";

function Chart() {
  return (
    <>
      <div className="Chart">
        <div className="Chart-top">
          <span className="Chart-top-time">
            <span>Time</span>
            <span>15m</span>
            <span>1H</span>
            <span>4H</span>
            <span>1D</span>
            <span>1W</span>
            <span>1D</span>
            <span className="Chart-top-time-icon">
              <TuneIcon />
            </span>
          </span>
          <span className="Chart-top-original">
            <span>Original</span>
            <span>TradingView</span>
            <span>Depth</span>
            <span>
              <OpenInFullIcon />
            </span>
          </span>
        </div>
        <div className="Chart-content">
          <div className="Chart-content-icon">
            <span>
              <AddIcon fontSize="large" />
            </span>
            <span>
              <ShowChartIcon fontSize="large" />
            </span>
            <span>
              <ListIcon fontSize="large" />
            </span>
            <span>
              <CreateOutlinedIcon fontSize="large" />
            </span>
            <span>
              <TitleRoundedIcon fontSize="large" />
            </span>
            <span>
              <PieChartOutlineRoundedIcon fontSize="large" />
            </span>
            <span>
              <SortRoundedIcon fontSize="large" />
            </span>
            <span>
              <SentimentSatisfiedRoundedIcon fontSize="large" />
            </span>
            <span>
              <DesignServicesRoundedIcon fontSize="large" />
            </span>
            <span>
              <LoupeRoundedIcon fontSize="large" />
            </span>
          </div>
          <div className="Chart-line">
            <img
              src="../../../Images/Chart/Chart.png"
              alt="chart"
              className="Chart-line-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;
