import { css } from "styled-components";

const StyledTheme = css`
  /* ------- Light-Mode Color Variables ------- */
  html {
    --color-text: #000000;
  }

  /* ------- Dark-Mode Color Variables ------- */
  [data-theme="dark"] {
    --color-text: #ffffff;
  }
`;

export default StyledTheme;
