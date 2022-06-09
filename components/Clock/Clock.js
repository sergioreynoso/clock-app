import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useTheme } from "next-themes";
import SunIcon from "../../public/images/icon-sun.svg";
import MoonIcon from "../../public/images/icon-moon.svg";
import { COLORS, END_POINTS, QUERIES } from "../../utils/constants";
import { fetcher, getTimeOfDayGreeting } from "../../utils/helpers";
import { getCurrentTime } from "../../utils/helpers";
import useSWR from "swr";

export default function Clock() {
  const { resolvedTheme } = useTheme();
  const [time, setTime] = useState(getCurrentTime());
  const { data, error } = useSWR(END_POINTS.timezone, fetcher);

  useEffect(() => {
    const timeInt = setInterval(() => {
      setTime(getCurrentTime());
    }, 60000);
    return () => clearInterval(timeInt);
  }, []);

  if (error) {
    return <Wrapper>Error loading data</Wrapper>;
  }

  if (!data) {
    return <Wrapper>Loading....</Wrapper>;
  }
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
        <TimeZone>{data?.abbreviation}</TimeZone>
      </TimeWrapper>
      <Location>{data?.timezone.replace("_", " ")}</Location>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${COLORS.white};
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
