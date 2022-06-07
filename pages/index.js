import { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import Clock from "../components/Clock/Clock";
import Expand from "../components/Expand/Expand";
import {
  COLORS,
  FONT_SIZE,
  LINE_HEIGHT,
  QUERIES,
  WEIGHTS,
} from "../utils/constants";

export default function Home() {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <Wrapper>
      <Clock isExpand={isExpand} setIsExpand={setIsExpand} />
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
