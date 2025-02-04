import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

 // Replace with your actual Measurement ID

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
