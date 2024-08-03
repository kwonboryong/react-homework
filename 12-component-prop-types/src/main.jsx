import React from "react";
import ReactDOM from "react-dom/client";
import ProfileList from "./components/ProfileList.jsx";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProfileList />
  </StrictMode>
);
