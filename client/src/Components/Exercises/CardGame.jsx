import { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";
import "./Card.css";
import { Text } from "@nextui-org/react";
import { Navigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";

const difficultSet = [
  { id: 1, img: "/img/html.png", stat: "" },
  { id: 1, img: "/img/html.png", stat: "" },
  { id: 2, img: "/img/css.png", stat: "" },
  { id: 2, img: "/img/css.png", stat: "" },
  { id: 3, img: "/img/js.png", stat: "" },
  { id: 3, img: "/img/js.png", stat: "" },
  { id: 4, img: "/img/scss.png", stat: "" },
  { id: 4, img: "/img/scss.png", stat: "" },
  { id: 5, img: "/img/react.png", stat: "" },
  { id: 5, img: "/img/react.png", stat: "" },
  { id: 6, img: "/img/vue.png", stat: "" },
  { id: 6, img: "/img/vue.png", stat: "" },
  { id: 7, img: "/img/angular.png", stat: "" },
  { id: 7, img: "/img/angular.png", stat: "" },
  { id: 8, img: "/img/nodejs.png", stat: "" },
  { id: 8, img: "/img/nodejs.png", stat: "" },
];

const easySet = [
  { id: 1, img: "../../img/html.png", stat: "" },
  { id: 1, img: "../../img/html.png", stat: "" },
  { id: 2, img: "../../img/css.png", stat: "" },
  { id: 2, img: "../../img/css.png", stat: "" },
];
let finalCardSet = [];

function CardGame({ level }) {
  console.log("card idhar");
  const [clicks, setTotalClicks] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [isGameComplete, setIsGameComplete] = useState(false);
  console.log(correct);
  const [items, setItems] = useState(
    finalCardSet.sort(() => Math.random() - 0.5)
  );

  finalCardSet = level === 1 ? easySet : difficultSet;
  useEffect(() => {
    setItems(finalCardSet);
  }, [level]);

  if (
    (!isGameComplete && level === 1 && correct === 2) ||
    (level === 2 && correct === 8)
  ) {
    // alert("game completed");
    setIsGameComplete(true);
    // return;
  }

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (current === prev) {
      alert("cant click because of same block");
      return;
    }

    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setCorrect((prevCorrect) => prevCorrect + 1);
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
    setTotalClicks((prevClick) => prevClick + 1);
  }

  const incorrectAttempts = clicks / 2 - correct;

  if (isGameComplete) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text h3 color="warning">
          <Navigate to="/" />
          {alert("No of incorrectAttempts:", { incorrectAttempts })}
        </Text>
      </div>
    );
  }
  return (
    <>
      <Text h1 size={60} color="secondary" weight="bold">
        Enhance your memory
      </Text>
      <div
        className={`container ${
          level === 1 ? "condition-small" : "condition-big"
        }`}
      >
        {items?.map((item, index) => (
          <MemoryCard
            key={index}
            item={item}
            id={index}
            handleClick={handleClick}
            img={item.img}
          />
        ))}
      </div>
    </>
  );
}

export default CardGame;
