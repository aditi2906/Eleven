import React, { useState } from "react";
const User = ({ person }) => {
  const [follow, setFollow] = useState(false);
  return (
    <div className="follower">
      <div>
        <img src={person.img} alt="profile" className="followerImage" />
        <div className="name">
          <span>{person.name}</span>
          <span>{person.username}</span>
        </div>
      </div>
      <button className={"button fc-button"} onClick={() => setFollow(!follow)}>
        {follow ? <>unfollow</> : <>follow</>}
      </button>
    </div>
  );
};

export default User;
