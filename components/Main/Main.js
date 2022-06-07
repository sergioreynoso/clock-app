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
      <QuotesWrapper>
        <Quotes />
      </QuotesWrapper>
      <ClockWrapper>
        <Clock />
      </ClockWrapper>
      <ButtonWrapper>
        <ExpandButton onClick={onClickHandler} isExpand={isExpand} />
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  grid-template-areas:
    "quote"
    "clock"
    "button";
  grid-template-rows: 1fr;
  grid-gap: 48px;

  width: 100%;
  height: 100%;

  padding-inline: 26px;
  padding-block-start: 32px;
  padding-block-end: 40px;

  @media ${QUERIES.tabletAndUp} {
    padding-inline: 64px;
    padding-block-start: 80px;
    padding-block-end: 64px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      "quote quote"
      "clock button";
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);

    padding-inline: 165px;
    padding-block-start: 56px;
    padding-block-end: 98px;
  }
`;

const QuotesWrapper = styled.div`
  grid-area: quote;
  align-self: start;
`;
const ClockWrapper = styled.div`
  grid-area: clock;
  align-self: end;
`;
const ButtonWrapper = styled.div`
  grid-area: button;
  align-self: end;

  @media ${QUERIES.laptopAndUp} {
    justify-self: end;
  }
`;

export default Main;
