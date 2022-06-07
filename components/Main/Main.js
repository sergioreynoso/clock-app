import React from "react";
import styled from "styled-components";
import { ANIMATION_TIME, QUERIES } from "../../utils/constants";
import Clock from "../Clock";
import ExpandButton from "../ExpandButton";
import Quotes from "../Quotes";

function Main({ isExpand, setIsExpand }) {
  const onClickHandler = () => {
    setIsExpand(expand => (expand ? false : true));
  };
  return (
    <Wrapper isExpand={isExpand}>
      <Quotes />
      <Clock />
      <ExpandButton onClick={onClickHandler} isExpand={isExpand} />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding-inline: 26px;
  transform: translateY(${({ isExpand }) => (isExpand ? "-50%" : "0")});
  transition: transform ${ANIMATION_TIME.medium} ease-in-out;

  @media ${QUERIES.tabletAndUp} {
    padding-inline: 64px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-inline: 165px;
  }
`;

export default Main;
