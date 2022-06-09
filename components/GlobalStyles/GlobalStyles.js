import { createGlobalStyle } from "styled-components";
import { COLORS, LINE_HEIGHT } from "../../utils/constants";
import Normalize from "./Normalize";
import Themes from "./Theme";

const GlobalStyles = createGlobalStyle`
  ${Normalize}
  ${Themes}

  body {
    font-family: "Inter", monospace;
    line-height: ${LINE_HEIGHT.regular};
    background-color: ${COLORS.black};
  }

  #__next { 
    display: flex;
    justify-content: center;
    height: 100%;
  }
  `;
export default GlobalStyles;
