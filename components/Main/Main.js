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
import Clock from "../Clock/Clock";
import ExpandButton from "../ExpandButton";

function Main({ isExpand, setIsExpand }) {
  const onClickHandler = () => {
    setIsExpand(expand => (expand ? false : true));
  };
  return (
    <Wrapper isExpand={isExpand}>
      <Clock />
      <ExpandButton onClick={onClickHandler} isExpand={isExpand} />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: translateY(${({ isExpand }) => (isExpand ? "-50%" : "0")});
  transition: transform ${ANIMATION_TIME.medium} ease-in-out;
`;

export default Main;
