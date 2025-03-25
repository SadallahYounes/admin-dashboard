import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "admin-lte/dist/css/adminlte.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import "./assets/custom.css";

import "admin-lte/dist/css/adminlte.min.css";
import "bootstrap/dist/css/bootstrap.min.css";



import { ThemeProvider } from "./context/themeContext";  

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);