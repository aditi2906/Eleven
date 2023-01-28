import React from "react";
import "./Card.css";
function MemoryCard({ item, id, handleClick, img }) {
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <div className={"card" + itemClass} onClick={() => handleClick(id)}>
      {console.log(img, "yolo")}
      <img src={img} alt="" />
    </div>
  );
}

export default MemoryCard;
