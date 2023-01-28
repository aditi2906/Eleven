import React from "react";
import NavbarHeader from "../Navbar/NavbarHeader";
import Chart from "./Chart/Chart";
import "./Dashboard.css";
import DashBoardCards from "./Cards/DashboardCards";
import Social from "./Social/Social";

const Dashboard = () => {
  return (
    <div>
      <NavbarHeader />
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
          justifyContent: "center",
          height: "50%",
        }}
      >
        <DashBoardCards />
      </div>
    </div>
  );
};

export default Dashboard;
