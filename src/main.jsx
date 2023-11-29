import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Details } from "./pages/Details";
import { Add } from "./pages/Add";
import { SingIn } from "./pages/SingIn";
import {SingOut} from "./pages/SingOut"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SingOut/>
    </ThemeProvider>
  </React.StrictMode>
);
