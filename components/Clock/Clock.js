import React from "react";
import styled from "styled-components";
import SunIcon from "../../public/images/icon-sun.svg";
import MoonIcon from "../../public/images/icon-moon.svg";
import { COLORS, QUERIES } from "../../utils/constants";

export default function Clock() {
  return (
    <Wrapper>
      <GreetingWrapper>
        <SunIcon />
        <Greeting>{`Good Morning, It's currently`}</Greeting>
      </GreetingWrapper>
      <TimeWrapper>
        <Time>{`11:37`}</Time>
        <TimeZone>{`bst`}</TimeZone>
      </TimeWrapper>
      <Location>{`In London, UK`}</Location>
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
