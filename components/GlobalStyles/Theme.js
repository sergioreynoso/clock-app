import { css } from "styled-components";
import { COLORS } from "../../utils/constants";

const StyledTheme = css`
  /* ------- Light-Mode Color Variables ------- */
  html {
    --color-text: ${COLORS.black};
    --color-bg: ${COLORS.white};
  }

  /* ------- Dark-Mode Color Variables ------- */
  [data-theme="dark"] {
    --color-text: ${COLORS.white};
    --color-bg: ${COLORS.black};
  }
`;

export default StyledTheme;
