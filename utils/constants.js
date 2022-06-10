import { keyframes } from "styled-components";

const BREAKPOINTS = {
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
  xsmall: "12px",
  small: "15px",
  regular: "18px",
  medium: "20px",
  large: "28px",
  xlarge: "40px",
  xxlarge: "56px",
  xxxlarge: "200px",
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

export const BACKGROUND_IMAGES = {
  light: "/images/background_day.jpg",
  dark: "/images/background_night.jpg",
};

export const ANIMATION_TIME = {
  slow: ".8s",
  medium: ".5s",
  fast: ".2s",
};

export const END_POINTS = {
  location: "https://ipwho.is/",
  timezone: "https://worldtimeapi.org/api/ip",
  quotes: "https://programming-quotes-api.herokuapp.com/Quotes/random",
};

export const FADE_IN = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
