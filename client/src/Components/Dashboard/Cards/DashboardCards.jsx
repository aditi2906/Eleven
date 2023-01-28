import React from "react";
import "./DashboardCards.css";
const DashBoardCards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        No of Active Days
        <p className="badge">21</p>
      </div>
      <div className="card">
        Total Exercise Score
        <p className="badge">35</p>
      </div>

      <div className="action-cards">
        <div className="action-card">
          <div className="img">
            <img
              src="https://cdn.dribbble.com/users/2205487/screenshots/11138436/video_call_-_illustration.png"
              alt="img"
            />
          </div>
          <div className="action-btn">
            <button>Schedule a session</button>
          </div>
        </div>
        <div className="action-card">
          <div className="img">
            <img
              src="https://ouch-cdn2.icons8.com/bVzz_lcMBS6bKFrXIFxnrK0Wh0fsUB8yhyy8k877M84/rs:fit:608:456/extend:false/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzQ3/LzZiYTM1ZDU0LWVh/ZTktNGZkYi1iMzRh/LWUwNjdkYzQwNDUz/MC5zdmc.png"
              alt="img"
            />
          </div>
          <div className="action-btn">
            <button>Start puzzle session</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardCards;
