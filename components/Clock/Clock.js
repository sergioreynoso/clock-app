import React from "react";
import styled from "styled-components";
import { useTheme } from "next-themes";
import { COLORS, END_POINTS, QUERIES } from "../../utils/constants";
import { fetcher } from "../../utils/helpers";
import { isSunSet } from "../../utils/helpers";
import useSWR from "swr";
import VisuallyHidden from "../VisuallyHidden";
import ClockGreeting from "../ClockGreeting/ClockGreeting";
import TimeCounter from "../TimeCounter/TimeCounter";

const Clock = () => {
  const { theme, setTheme } = useTheme();
  const { data, error } = useSWR(END_POINTS.location, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    refreshInterval: 0,
  });

  if (error) return <Wrapper>Error loading data</Wrapper>;
  if (!data && !error) return <Wrapper>Loading....</Wrapper>;

  isSunSet(data) ? setTheme("dark") : setTheme("light");

  return (
    <Wrapper>
      <h2>
        <VisuallyHidden>Time Of Day And Location</VisuallyHidden>
      </h2>
      <ClockGreeting theme={theme} />
      <TimeWrapper>
        <TimeCounter />
        <TimeZone>{data.timezone.abbr}</TimeZone>
      </TimeWrapper>
      <Location>{`${data.region}, ${data.region_code}`}</Location>
    </Wrapper>
  );
};

const Wrapper = styled.article`
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

const TimeWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 16px;
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

export default React.memo(Clock);
