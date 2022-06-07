import { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "next-themes";
import BackgroundImage from "../components/BackgroundImage";
import Clock from "../components/Clock/Clock";
import Expand from "../components/Expand/Expand";
import { QUERIES } from "../utils/constants";

export default function Home() {
  const [isExpand, setIsExpand] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Delays rendering until UI has been mounted on the client to prevents hydration errors
  useEffect(() => {
    setMounted(true);
    setTheme("dark");
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Wrapper>
      <Clock isExpand={isExpand} setIsExpand={setIsExpand} theme={theme} />
      <Expand isExpand={isExpand} />
      <BackgroundImage />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 667px;
  overflow: hidden;

  @media ${QUERIES.tabletAndUp} {
    min-height: 1024px;
  }
  @media ${QUERIES.laptopAndUp} {
    min-height: 800px;
  }
`;
