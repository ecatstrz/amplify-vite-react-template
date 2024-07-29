import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

// Configure AWS Amplify using the outputs from the backend
Amplify.configure(outputs);

/**
 * The entry point of the React application.
 * Renders the App component inside a React StrictMode component.
 * deploying test change
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
