import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

//Redirect to main domain
if (window.location.hostname !== 'libyzxy0.com'  && !window.location.hostname.startsWith('localhost')) {
    window.location.href = 'https://libyzxy0.com';
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
