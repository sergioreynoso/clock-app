import { useState, useEffect } from "react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Main from "../components/Main";
import Expand from "../components/Expand";
import { ANIMATION_TIME, FADE_IN, QUERIES } from "../utils/constants";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [isExpand, setIsExpand] = useState(false);

  // Delays rendering until UI has been mounted on the client to prevents hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Wrapper>
      <MainWrapper isExpand={isExpand}>
        <Main isExpand={isExpand} setIsExpand={setIsExpand} />
      </MainWrapper>
      <ExpandWrapper isExpand={isExpand}>
        <Expand />
      </ExpandWrapper>
      <BackgroundImage />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* Sets the height of the Expand component in percent*/
  --expand-height: 38%;

  position: relative;
  width: 100%;
  height: 100%;
  min-height: 667px;
  overflow: hidden;

  will-change: transform;
  animation: ${FADE_IN} ${ANIMATION_TIME.slow};
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;

  @media ${QUERIES.tabletAndUp} {
    --expand-height: 43%;
    min-height: 1024px;
  }
  @media ${QUERIES.laptopAndUp} {
    --expand-height: 50%;
    min-height: 800px;
  }
`;

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding-inline: 26px;
  padding-block-start: 32px;
  padding-block-end: 40px;

  /* Determines how much component will translate based on Expand height component */
  transform: translateY(
    calc(var(--expand-height) * ${({ isExpand }) => (isExpand ? "-1" : "0")})
  );
  will-change: transform;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${ANIMATION_TIME.medium} ease-in-out,
      padding-block-end ${ANIMATION_TIME.medium} ease-in-out;
  }

  @media ${QUERIES.tabletAndUp} {
    padding-inline: 64px;
    padding-block-start: 80px;
    padding-block-end: 64px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-inline: 165px;
    padding-block-start: 56px;
    padding-block-end: ${({ isExpand }) => (isExpand ? "56px" : "98px")};
  }
`;

const ExpandWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  height: var(--expand-height);
  will-change: transform;
  transform: translateY(${({ isExpand }) => (isExpand ? "0%" : "100%")});
  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${ANIMATION_TIME.medium} ease-in-out;
  }
`;

export default Home;
