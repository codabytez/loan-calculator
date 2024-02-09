import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./components/App";
// Supports weights 100-900
import "@fontsource-variable/raleway";

const colors = {
  green: "#54D4A0",
  gray: "#808080",
  "label-color": "#808080",
  "light-gray-slider": "#F0F0F0",
  "light-gray-box": "#F6F6F6",
  "light-green-box": "#E9FFF6",
};
const fonts = {
  body: `"Raleway Variable", sans-serif`,
  heading: `"Raleway Variable", sans-serif`,
  mono: `"Raleway Variable", sans-serif`,
};
const styles = {
  global: {
    "html, body": {
      fontFamily: `"Raleway Variable", sans-serif`,
      bg: "white",
      color: "black",
    },
  },
};

const theme = extendTheme({ styles, colors, fonts });

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
