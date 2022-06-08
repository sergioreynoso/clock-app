import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../utils/constants";
import Clock from "../Clock";
import ExpandButton from "../ExpandButton";
import Quotes from "../Quotes";

function Main({ isExpand, setIsExpand }) {
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
      "quote quote"
      "clock button";
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
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
