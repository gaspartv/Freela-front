import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import AnimationProvider from "./contexts/AnimationContext";
import { UserProvider } from "./contexts/UserContext";
import LoadProvider from "./contexts/LoadContext";
import HomeProvider from "./contexts/HomeContext";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadProvider>
        <AnimationProvider>
          <UserProvider>
            <HomeProvider>
              <App />
            </HomeProvider>
          </UserProvider>
        </AnimationProvider>
      </LoadProvider>
    </BrowserRouter>
  </React.StrictMode>
);
