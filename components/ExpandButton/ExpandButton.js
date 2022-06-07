import React from "react";
import styled from "styled-components";
import { ANIMATION_TIME, COLORS, QUERIES } from "../../utils/constants";
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
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.2344rem;
  text-transform: uppercase;
  color: hsl(${COLORS.grey} / 0.5);

  @media ${QUERIES.laptopAndUp} {
    font-size: 1rem;
    letter-spacing: 0.3125rem;
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