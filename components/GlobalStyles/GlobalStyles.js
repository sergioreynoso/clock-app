import { createGlobalStyle } from "styled-components";
import Normalize from "./Normalize";

const GlobalStyles = createGlobalStyle`
  ${Normalize}

  body {
    font-family: "Inter", monospace;
    line-height: 1.5;
  }
  `;
export default GlobalStyles;
