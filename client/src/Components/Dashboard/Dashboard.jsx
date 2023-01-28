import React from "react";
import NavbarHeader from "../Navbar/Navbar";
import Chart from "./Chart/Chart";
import "./Dashboard.css";
import DashBoardCards from "./Cards/DashboardCards";
import Social from "./Social/Social";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavbarHeader />
      <div>
        <div className="dashboardBody">
          <div class="chart">
            <Chart />
          </div>
          <div class="followerCard">
            <Social />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50%",
          }}
        >
          <DashBoardCards />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
