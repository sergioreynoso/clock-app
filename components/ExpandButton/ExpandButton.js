import styled from "styled-components";
import Image from "next/image";
import * as Toggle from "@radix-ui/react-toggle";
import { ANIMATION_TIME, COLORS, QUERIES } from "../../utils/constants";
import IconArrowUp from "../../public/images/icon-arrow-up.svg";

export default function ExpandButton({ isToggled, onClick }) {
  return (
    <Button
      onClick={onClick}
      aria-label={`Toggle ${isToggled ? "less" : "more"}`}
      aria-expanded={isToggled}
      aria-controls="location_details">
      <Label aria-hidden="true">{isToggled ? "Less" : "More"}</Label>
      <Icon src={IconArrowUp} $isToggled={isToggled} aria-hidden="true" />
    </Button>
  );
}

const Button = styled(Toggle.Root)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 115px;
  height: 40px;
  padding-inline-start: 16px;
  padding-inline-end: 4px;
  background-color: hsl(${COLORS.white});
  border-radius: 5000px;

  @media ${QUERIES.laptopAndUp} {
    width: 146px;
    height: 56px;
    padding-inline-start: 24px;
    padding-inline-end: 8px;
  }
`;

const Label = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.2344rem;
  text-transform: uppercase;
  color: hsl(${COLORS.black} / 0.65);

  @media ${QUERIES.laptopAndUp} {
    font-size: 1rem;
    letter-spacing: 0.3125rem;
  }
`;

const Icon = styled(Image)`
  width: 32px;
  height: 32px;
  transform: rotate(${({ $isToggled }) => ($isToggled ? "0deg" : "180deg")});

  ${Button}:hover & {
    opacity: 0.5;
  }

  will-change: transform;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${ANIMATION_TIME.medium} ease-in-out;
  }

  @media ${QUERIES.laptopAndUp} {
    width: 40px;
    height: 40px;
  }
`;
