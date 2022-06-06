import { useState } from "react";
import styled from "styled-components";
import { FONT_SIZE, LINE_HEIGHT, QUERIES, WEIGHTS } from "../utils/constants";

export default function Home() {
  const [isExpand, setIsExpand] = useState(false);

  const onClickHandler = () => {
    setIsExpand(expand => (expand ? false : true));
  };

  return (
    <Wrapper>
      <Clock isExpand={isExpand}>
        <Title>11:37</Title>
        <Button onClick={onClickHandler}>Expand</Button>
      </Clock>
      <Detail isExpand={isExpand}></Detail>
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

const Clock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: pink;
  transform: translateY(${({ isExpand }) => (isExpand ? "-50%" : "0")});
  transition: transform 0.5s ease-in-out;
`;

const Detail = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background-color: blue;
  transform: translateY(${({ isExpand }) => (isExpand ? "0" : "100%")});
  transition: transform 0.5s ease-in-out;
`;

const Title = styled.h1`
  font-size: ${FONT_SIZE.xxlarge};
  font-weight: ${WEIGHTS.bold};
  line-height: ${LINE_HEIGHT.large};
  color: var(--color-text);
`;

const Button = styled.button``;
