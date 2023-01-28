import React, { useEffect, useState } from "react";
import { Vertify } from "@alex_xu/react-slider-vertify";
import { ToastContainer, toast } from "react-toastify";
import { Button, StyledButton, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";
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
    <>
      {" "}
      <div class="sliderPuzzle">
        {slider && (
          <div>
            <Text h3 size={60} color="secondary" weight="bold">
              Here's a puzzle
            </Text>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Vertify
                width={320}
                height={160}
                onSuccess={() => {
                  setSuccess(true);
                  updateCount(count);
                  if (count === 4) {
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
                {next && (
                  <Link to="/memory">
                    <StyledButton color="success">
                      Go to Next Exercise
                    </StyledButton>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SliderPuzzle;
