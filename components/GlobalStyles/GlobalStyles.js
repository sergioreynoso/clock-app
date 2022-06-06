import { createGlobalStyle } from "styled-components";
import Normalize from "./Normalize";
import Themes from "./Theme";

const GlobalStyles = createGlobalStyle`
  ${Normalize}
  ${Themes}

  body {
    font-family: "Inter", monospace;
    line-height: 1.5;
  }
  `;
export default GlobalStyles;
