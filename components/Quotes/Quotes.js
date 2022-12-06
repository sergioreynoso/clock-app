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
import VisuallyHidden from "../VisuallyHidden";

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

  if (!data && !error) {
    return (
      <QuoteWrapper>
        <Author>Loading...</Author>
      </QuoteWrapper>
    );
  }

  return (
    <Wrapper>
      <h2>
        <VisuallyHidden>Random Quote Generator</VisuallyHidden>
      </h2>

      <QuoteWrapper key={data._id}>
        <Quote>{data.content}</Quote>
        <Author>{data.author}</Author>
      </QuoteWrapper>
      <Button onClick={onClickHandler}>
        <VisuallyHidden>Refresh quote</VisuallyHidden>
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

const Wrapper = styled.article`
  display: flex;
`;

const QuoteWrapper = styled.figure`
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

const Quote = styled.blockquote`
  font-size: 0.75rem;
  line-height: 1.375rem;
  color: inherit;

  @media ${QUERIES.tabletAndUp} {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const Author = styled.figcaption`
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
  fill: hsl(${COLORS.white});
`;

const Button = styled.button`
  flex: 0 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: none;
  transform: translateY(-2px);
`;

export default memo(Quotes);
