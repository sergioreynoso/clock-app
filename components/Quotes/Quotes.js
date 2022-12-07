import Image from "next/image";
import React, { memo } from "react";
import styled from "styled-components";
import {
  ANIMATION_TIME,
  COLORS,
  END_POINTS,
  FADE_IN,
  QUERIES,
} from "../../utils/constants";
import VisuallyHidden from "../VisuallyHidden";
import RefreshIcon from "../../public/images/icon-refresh.svg";
import useFetchData from "../../hooks/useFetchData";

const Quotes = () => {
  const { data, error, mutate } = useFetchData(END_POINTS.quotes);

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
      <QuoteWrapper role="alert">
        <Quote>{data.content}</Quote>
        <Author>{data.author}</Author>
      </QuoteWrapper>
      <Button onClick={onClickHandler}>
        <VisuallyHidden>Refresh quote</VisuallyHidden>
        <Image
          src={RefreshIcon}
          alt="Refresh Icon"
          width={18}
          height={18}
          aria-hidden="true"
        />
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  display: flex;
  gap: 8px;
  color: hsl(${COLORS.white});
  will-change: transform;
  animation: ${FADE_IN} ${ANIMATION_TIME.slow};
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
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

const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 573px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: black;

  background-color: transparent;
  transform: translateY(-8px);
  opacity: 0.5;

  &:active {
    opacity: 1;
  }

  @media ${QUERIES.tabletAndUp} {
    transform: translateY(-5px);
  }

  @media (hover: hover) {
    &:hover {
      opacity: 1;
    }
  }
`;

export default memo(Quotes);
