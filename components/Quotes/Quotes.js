import React, { memo } from "react";
import styled, { keyframes } from "styled-components";
import useSWR, { useSWRConfig } from "swr";
import Icon from "../../public/images/icon-refresh.svg";
import {
  ANIMATION_TIME,
  COLORS,
  END_POINTS,
  FADE_IN,
  QUERIES,
} from "../../utils/constants";
import { fetcher } from "../../utils/helpers";

const Quotes = () => {
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR(END_POINTS.quotes, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    refreshInterval: 0,
  });

  const onClickHandler = () => {
    mutate(END_POINTS.quotes);
  };

  if (error) {
    return (
      <QuoteWrapper>
        <Author>Error loading quotes</Author>
      </QuoteWrapper>
    );
  }

  if (!data) {
    return (
      <QuoteWrapper>
        <Author>Loading...</Author>
      </QuoteWrapper>
    );
  }

  return (
    <Wrapper>
      <QuoteWrapper key={data.author}>
        <Quote>{data.en}</Quote>
        <Author>{data.author}</Author>
      </QuoteWrapper>
      <Button onClick={onClickHandler}>
        <RefreshIcon />
      </Button>
    </Wrapper>
  );
};

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
  animation: ${FADE_IN} ${ANIMATION_TIME.slow};
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

export default memo(Quotes);
