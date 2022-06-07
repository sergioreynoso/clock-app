import React from "react";
import styled from "styled-components";
import {
  ANIMATION_TIME,
  COLORS,
  FONT_SIZE,
  QUERIES,
  WEIGHTS,
} from "../../utils/constants";
import IconArrowUp from "../../public/images/icon-arrow-up.svg";

export default function ExpandButton({ onClick, isExpand }) {
  return (
    <Button onClick={onClick}>
      <Label>{isExpand ? "Less" : "More"}</Label>
      <Icon isExpand={isExpand} />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 115px;
  height: 40px;
  padding-inline-start: 20px;
  padding-inline-end: 4px;
  background-color: hsl(${COLORS.white});
  border-radius: 5000px;

  @media ${QUERIES.laptopAndUp} {
    width: 146px;
    height: 56px;
    padding-inline-start: 28px;
    padding-inline-end: 8px;
  }
`;

const Label = styled.span`
  font-size: ${FONT_SIZE.xsmall};
  font-weight: ${WEIGHTS.bold};
  letter-spacing: 3.75px;
  text-transform: uppercase;
  color: hsl(${COLORS.grey} / 0.5);

  @media ${QUERIES.laptopAndUp} {
    font-size: ${FONT_SIZE.small};
    letter-spacing: 5px;
  }
`;

const Icon = styled(IconArrowUp)`
  width: 32px;
  height: 32px;
  transform: rotate(${({ isExpand }) => (isExpand ? "180deg" : "0deg")});
  transition: transform ${ANIMATION_TIME.medium} ease-in-out;

  @media ${QUERIES.laptopAndUp} {
    width: 40px;
    height: 40px;
  }
`;
