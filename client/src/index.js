import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";
import CardGame from "./Cards Game/CardGame";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NextUIProvider>
    {/* <App /> */}
    <CardGame />
  </NextUIProvider>,
);
