import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import AnimationProvider from "./contexts/AnimationContext";
import HomeProvider from "./contexts/HomeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimationProvider>
        <HomeProvider>
          <App />
        </HomeProvider>
      </AnimationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
