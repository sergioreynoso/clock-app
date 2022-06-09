import React, { useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import Icon from "../../public/images/icon-refresh.svg";
import { getRandomQuote } from "../../utils/api";
import { ANIMATION_TIME, COLORS, QUERIES } from "../../utils/constants";
import { MainContext } from "../../utils/context";

export default function Quotes() {
  const [quote, setQuote] = useState(useContext(MainContext).quote);
  const [isLoading, setIsLoading] = useState(false);

  const upDate = async () => {
    setIsLoading(true);
    const quote = await getRandomQuote();
    setQuote(quote);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <Wrapper>
        <QuoteWrapper>
          <Author>Loading Quote...</Author>
        </QuoteWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <QuoteWrapper key={quote.author}>
        <Quote>{quote.en}</Quote>
        <Author>{quote.author}</Author>
      </QuoteWrapper>
      <Button onClick={upDate}>
        <RefreshIcon />
      </Button>
    </Wrapper>
  );
}

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const QuoteWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: hsl(${COLORS.white});
  gap: 8px;

  will-change: transform;
  animation: ${FadeIn} 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;

  @media ${QUERIES.tabletAndUp} {
    gap: 13px;
  }
`;

const Quote = styled.span`
  font-size: 0.75rem;
  line-height: 1.375rem;
  color: inherit;

  @media ${QUERIES.tabletAndUp} {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const Author = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: inherit;
  @media ${QUERIES.tabletAndUp} {
    font-size: 18px;
  }
`;

const RefreshIcon = styled(Icon)`
  width: 18px;
  height: 18px;
  transform: translateX(20px);
`;

const Button = styled.button`
  flex: 0 0 40px;
  display: flex;
  justify-content: flex;
  align-items: center;
  height: 40px;
  background-color: transparent;
  transform: translateY(-2px);
`;
