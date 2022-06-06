export const BREAKPOINTS = {
  tabletMin: 599,
  laptopMin: 1100,
  desktopMin: 1400,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};

export const COLORS = {
  white: "0deg 0% 100%",
  black: "0deg 0% 0%",
  grey: "0deg 0% 19%",
};

export const FONT_SIZE = {
  small: "15px",
  regular: "18px",
  medium: "20px",
  large: "28px",
  xlarge: "56px",
  xxlarge: "200px",
};

export const WEIGHTS = {
  normal: 400,
  bold: 700,
};

export const LINE_HEIGHT = {
  regular: "1.75rem",
  medium: "4.25rem",
  large: "12.5rem",
};
