import React from "react";
import NavbarHeader from "../Navbar/Navbar";
import Chart from "./Chart";
import "./Dashboard.css";
import Social from "./Social";

const Dashboard = () => {
  return (
    <div>
      <NavbarHeader />
      <div className="dashboardBody">
        <div class="chart" >
          <Chart />
        </div>
        <Social />
      </div>
    </div>
  );
};

export default Dashboard;
