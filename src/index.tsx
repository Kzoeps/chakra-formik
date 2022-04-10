import React from "react";
import ReactDOM from "react-dom";
import { createRoot }from "react-dom/client";
import { App } from "./app";

const app = document.getElementById("app") as Element;
ReactDOM.render(<App />, app);
