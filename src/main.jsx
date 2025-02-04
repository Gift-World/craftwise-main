import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4"; // Import Google Analytics
import "./index.css";
import App from "./App.jsx";

// Initialize Google Analytics with your Measurement ID
ReactGA.initialize("G-453EHGH7V6"); // Replace with your actual Measurement ID

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
