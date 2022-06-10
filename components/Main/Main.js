import React from "react";
import styled from "styled-components";
import { ANIMATION_TIME, FADE_IN, QUERIES } from "../../utils/constants";
import Clock from "../Clock";
import ExpandButton from "../ExpandButton";
import Quotes from "../Quotes";

function Main() {
  return (
    <Wrapper>
      <QuotesWrapper>
        <Quotes />
      </QuotesWrapper>
      <ClockWrapper>
        <Clock />
      </ClockWrapper>
      <ButtonWrapper>
        <ExpandButton />
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

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      "quote ."
      "clock button";
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 1.2fr 1fr;
  }
`;

const QuotesWrapper = styled.div`
  grid-area: quote;
  align-self: start;

  animation: ${FADE_IN} ${ANIMATION_TIME.slow};
  animation-delay: 900ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
`;
const ClockWrapper = styled.div`
  grid-area: clock;
  align-self: end;

  will-change: transform;
  animation: ${FADE_IN} ${ANIMATION_TIME.slow};
  animation-delay: 1000ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
`;
const ButtonWrapper = styled.div`
  grid-area: button;
  align-self: end;

  animation: ${FADE_IN} ${ANIMATION_TIME.slow};
  animation-delay: 1200ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;

  @media ${QUERIES.laptopAndUp} {
    justify-self: end;
  }
`;

export default Main;
