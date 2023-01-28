import React, { useEffect, useState } from "react";
import { Vertify } from "@alex_xu/react-slider-vertify";
import styles from "./stylePuzzle.scss";
import { ToastContainer, toast } from "react-toastify";
import { Button, Text } from "@nextui-org/react";
import "./style.css";
import CardGame from "./CardGame";
const SliderPuzzle = () => {
  const [success, setSuccess] = useState(false);
  const [count, setCount] = useState(0);
  const [slider, setSlider] = useState(true);
  const [next, setNext] = useState(false);
  const updateCount = (count) => {
    console.log(count, "hello");
    setCount(count + 1);
  };

  return (
    <div class="sliderPuzzle">
      <Text h1 size={60} color="secondary" weight="bold">
        Here's a puzzle for you
      </Text>
      {slider && (
        <div
          class="container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Vertify
            width={320}
            height={160}
            onSuccess={() => {
              setSuccess(true);
              updateCount(count);
              if (count == 4) {
                setSlider(false);
                setNext(true);
              }
            }}
            onRefresh={success ? setSuccess(false) : undefined}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              gap: "10px",
            }}
          >
            {/* {success && (
            <div style={{ marginTop: "10px", flex: "1" }}>
              <Button
                color="success"
                style={{ height: "inherit" }}
                auto
                size="sm"
                onClick={() => {
                  updateCount(count);
                }}
              >
                Next
              </Button>
            </div>
          )} */}
            <Button
              auto
              color="primary"
              size="sm"
              style={{ height: "inherit" }}
            >
              {count}/5
            </Button>
          </div>
        </div>
      )}
      {next && <CardGame />}
    </div>
  );
};

export default SliderPuzzle;
