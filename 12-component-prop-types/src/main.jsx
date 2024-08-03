import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import ProfileList from "./components/ProfileList.jsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <ProfileList />
    </StrictMode>
  )
  
} else {
  console.log("root 요소가 없습니다.");
}
