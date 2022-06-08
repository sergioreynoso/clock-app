import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useTheme } from "next-themes";
import SunIcon from "../../public/images/icon-sun.svg";
import MoonIcon from "../../public/images/icon-moon.svg";
import { COLORS, QUERIES } from "../../utils/constants";
import { MainContext } from "../../utils/context";
import { getTimeOfDayGreeting } from "../../utils/helpers";

export default function Clock() {
  const { resolvedTheme } = useTheme();
  const { time, location, timezone } = useContext(MainContext);

  return (
    <Wrapper>
      <GreetingWrapper>
        <IconWrapper>
          {resolvedTheme === "light" ? <SunIcon /> : <MoonIcon />}
        </IconWrapper>
        <Greeting>{`Good ${getTimeOfDayGreeting()}, It's currently`}</Greeting>
      </GreetingWrapper>
      <TimeWrapper>
        <Time>{time}</Time>
        <TimeZone>{timezone.abbreviation}</TimeZone>
      </TimeWrapper>
      <Location>{`${location.region_name}, ${location.region_code}`}</Location>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media ${QUERIES.tabletAndUp} {
    gap: 0;
  }
  @media ${QUERIES.laptopAndUp} {
    gap: 16px;
  }
`;

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

const TimeWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
`;

const Time = styled.h1`
  font-size: 6.25rem;
  font-weight: 700;
  line-height: 1;
  color: hsl(${COLORS.white});
  @media ${QUERIES.tabletAndUp} {
    font-size: 10.9375rem;
    letter-spacing: -0.2737rem;
  }
  @media ${QUERIES.laptopAndUp} {
    font-size: 12.5rem;
    letter-spacing: -0.3125rem;
  }
`;

const TimeZone = styled.span`
  font-size: 0.9375rem;
  text-transform: uppercase;
  letter-spacing: 0;
  color: hsl(${COLORS.white});
  @media ${QUERIES.tabletAndUp} {
    font-size: 2rem;
  }
  @media ${QUERIES.laptopAndUp} {
    font-size: 2.5rem;
    letter-spacing: 0;
  }
`;

const Location = styled.span`
  font-size: 0.9375rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1875rem;
  color: hsl(${COLORS.white});
  @media ${QUERIES.tabletAndUp} {
    font-size: 1.125rem;
  }
  @media ${QUERIES.laptopAndUp} {
    font-size: 24px;
    letter-spacing: 0.3rem;
  }
`;
