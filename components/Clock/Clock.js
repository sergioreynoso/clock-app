import React from "react";
import styled from "styled-components";
import {
  ANIMATION_TIME,
  COLORS,
  FONT_SIZE,
  LINE_HEIGHT,
  QUERIES,
  WEIGHTS,
} from "../../utils/constants";
import ExpandButton from "../ExpandButton";

function Clock({ isExpand, setIsExpand }) {
  const onClickHandler = () => {
    setIsExpand(expand => (expand ? false : true));
  };
  return (
    <Wrapper isExpand={isExpand}>
      <Title>11:37</Title>
      <ExpandButton onClick={onClickHandler} isExpand={isExpand} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: translateY(${({ isExpand }) => (isExpand ? "-50%" : "0")});
  transition: transform ${ANIMATION_TIME.medium} ease-in-out;
`;

const Title = styled.h1`
  font-size: ${FONT_SIZE.xxlarge};
  font-weight: ${WEIGHTS.bold};
  line-height: ${LINE_HEIGHT.large};
  color: hsl(${COLORS.white});
`;

export default Clock;
