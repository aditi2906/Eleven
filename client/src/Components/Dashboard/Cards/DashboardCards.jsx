import React from "react";
import "./DashboardCards.css";
import { Link } from "react-router-dom";
const DashBoardCards = () => {
  return (
    <div className="dashboard-cards-container">
      <div className="dashboard-card">
        No of Active Days
        <p className="dashboard-badge">21</p>
      </div>
      <div className="dashboard-card">
        Total Exercise Score
        <p className="dashboard-badge">35</p>
      </div>

      <div className="dashboard-action-cards">
        <div className="dashboard-action-card">
          <div className="dashboard-img">
            <img
              src="https://cdn.dribbble.com/users/2205487/screenshots/11138436/video_call_-_illustration.png"
              alt="img"
            />
          </div>
          <div className="dashboard-action-btn">
            <Link to="http://localhost:3030/">
              <button>Schedule a session</button>
            </Link>
          </div>
        </div>
        <div className="dashboard-action-card">
          <div className="dashboard-img">
            <img
              src="https://ouch-cdn2.icons8.com/bVzz_lcMBS6bKFrXIFxnrK0Wh0fsUB8yhyy8k877M84/rs:fit:608:456/extend:false/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzQ3/LzZiYTM1ZDU0LWVh/ZTktNGZkYi1iMzRh/LWUwNjdkYzQwNDUz/MC5zdmc.png"
              alt="img"
            />
          </div>
          <div className="dashboard-action-btn">
            <Link to="/puzzle">
              <button>Start puzzle session</button>
            </Link>
          </div>
        </div>

        <div className="dashboard-action-card">
          <div className="dashboard-img">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-parkinson-illustration_23-2149293345.jpg?w=740&t=st=1674957261~exp=1674957861~hmac=811f8dbf906d4aa0f81502409229fdeda9051cc1496217c55009dbab3b4d0c54"
              alt="img"
            />
          </div>
          <div className="dashboard-action-btn">
            <Link to="/opencv">
              <button>Motion Tuning</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardCards;
