import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import AnimationProvider from "./contexts/AnimationContext";
import { UserProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimationProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AnimationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
