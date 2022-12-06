import React from "react";
import styled from "styled-components";
import { COLORS, QUERIES } from "../../utils/constants";
import { getTimeOfDayGreeting } from "../../utils/helpers";
import SunIcon from "../../public/images/icon-sun.svg";
import MoonIcon from "../../public/images/icon-moon.svg";
import Image from "next/image";

const sunIconUrl = "../../";

const ClockGreeting = ({ theme }) => {
  const themedIconUrl = theme === "light" ? SunIcon : MoonIcon;
  const themedIconAltText =
    theme === "light" ? "Icon of a sun" : "Icon of a moon";
  return (
    <GreetingWrapper>
      <IconWrapper>
        <Image
          src={themedIconUrl}
          width={24}
          height={24}
          alt={themedIconAltText}
        />
      </IconWrapper>
      <Greeting>{`Good ${getTimeOfDayGreeting()}, It's currently`}</Greeting>
    </GreetingWrapper>
  );
};

const IconWrapper = styled.div`
  flex-shrink: 0;
`;

const GreetingWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const Greeting = styled.span`
  font-size: 0.9375rem;
  text-transform: uppercase;
  letter-spacing: 0.1875rem;
  color: hsl(${COLORS.white});

  @media ${QUERIES.tabletAndUp} {
    font-size: 1.125rem;
    letter-spacing: 0.225rem;
  }

  @media ${QUERIES.laptopAndUp} {
    font-size: 1.25rem;
    letter-spacing: 0.25rem;
  }
`;

export default ClockGreeting;
