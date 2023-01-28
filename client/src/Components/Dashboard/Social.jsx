import { React } from "react";
import "./FollowersCard.css";
import User from "./User";
import { Followers } from "../../Data/followerData";
const Social = () => {
  return (
    <div className="FollowersCard">
      <h3>Maybe follow?</h3>
      {Followers.map((person, id) => {
        return <User person={person} key={id} />;
      })}
    </div>
  );
};

export default Social;
