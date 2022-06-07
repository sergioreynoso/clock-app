import { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "next-themes";
import BackgroundImage from "../components/BackgroundImage";
import Main from "../components/Main";
import Expand from "../components/Expand";
import { ANIMATION_TIME, QUERIES } from "../utils/constants";

export default function Home() {
  const [isExpand, setIsExpand] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Delays rendering until UI has been mounted on the client to prevents hydration errors
  useEffect(() => {
    setMounted(true);
    setTheme("light");
  }, [setTheme]);

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
}

const Wrapper = styled.div`
  /* Sets the height of the Expand component in percent*/
  --expand-height: 38%;

  position: relative;
  width: 100%;
  height: 100%;
  min-height: 667px;
  overflow: hidden;

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
  /* Determines how much component will translate based on Expand height component */
  transform: translateY(
    calc(var(--expand-height) * ${({ isExpand }) => (isExpand ? "-1" : "0")})
  );
  transition: transform ${ANIMATION_TIME.medium} ease-in-out;
`;

const ExpandWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  height: var(--expand-height);
  transform: translateY(${({ isExpand }) => (isExpand ? "0" : "100%")});
  transition: transform ${ANIMATION_TIME.medium} ease-in-out;
`;
