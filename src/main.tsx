import React from "react";
import ReactDOM from "react-dom/client";
import { CalculatorProvider } from "./context.tsx";
import App from "./App.tsx";
import "@fontsource-variable/league-spartan";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CalculatorProvider>
      <App />
    </CalculatorProvider>
  </React.StrictMode>
);
