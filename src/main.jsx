import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import AppShellComp from "./AppShellComp.jsx";
import { BrowserRouter } from "react-router-dom";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/carousel/styles.css";
import "./styles/global.css";
import theme from "./styles/theme.js";
import { RefetchProvider } from "./contexts/RefetchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <RefetchProvider>
        <MantineProvider theme={theme}>
          <AppShellComp />
        </MantineProvider>
        </RefetchProvider>
    </BrowserRouter>
  </React.StrictMode>
);
