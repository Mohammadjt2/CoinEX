import "./App.css";
import Chart from "./Components/Chart/Chart";
import NavBar from "./Components/NavBar/NavBar";
import SideBarLeft from "./Components/SideBarLeft/SideBarLeft";
import SideBarRight from "./Components/SideBarRight/SideBarRight";
import TopBar from "./Components/TopBar/TopBar";
import Trading from "./Components/Trading/Trading";

function App() {
  return (
    <div>
      <NavBar />
      <div className="app-content">
        <div className="div1">
          <SideBarLeft />
        </div>
        <div className="div2">
            <TopBar />
        </div>
        <div className="div3">
          <Chart/>
          <Trading />
        </div>
        <div className="div4">
          <SideBarRight />
        </div>
      </div>
    </div>
  );
}

export default App;
