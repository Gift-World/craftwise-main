import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Initialize Google Analytics with your Measurement ID

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
