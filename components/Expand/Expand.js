import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import {
  ANIMATION_TIME,
  COLORS,
  END_POINTS,
  QUERIES,
} from "../../utils/constants";
import { fetcher } from "../../utils/helpers";

export default function Expand() {
  const { data, error } = useSWR(END_POINTS.timezone, fetcher);

  if (error) {
    return <Wrapper>Error loading data</Wrapper>;
  }

  if (!data) {
    return <Wrapper>Loading....</Wrapper>;
  }

  return (
    <Wrapper>
      <ListWrapper>
        <ListItem1>
          <Heading>Current Timezone</Heading>
          <SugHeading>{data.timezone.replace("_", " ")}</SugHeading>
        </ListItem1>
        <ListItem2>
          <Heading>Day of the year</Heading>
          <SugHeading>{data.day_of_year}</SugHeading>
        </ListItem2>
        <VerticalLine />
        <ListItem3>
          <Heading>Day of the week</Heading>
          <SugHeading>{data.day_of_week + 1}</SugHeading>
        </ListItem3>
        <ListItem4>
          <Heading>Week number</Heading>
          <SugHeading>{data.week_number}</SugHeading>
        </ListItem4>
      </ListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  color: hsl(var(--color-text));
  background-color: hsl(var(--color-bg) / 0.75);
  padding: 48px 26px;

  @media ${QUERIES.tabletAndUp} {
    padding-inline-start: 64px;
    padding-block: 119px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-inline-start: 165px;
    padding-block: 74px;
  }
`;

const ListWrapper = styled.ul`
  display: grid;
  grid-template-areas:
    "item1"
    "item2"
    "item3"
    "item4";
  gap: 18px;
  height: 100%;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      "item1 vline item3"
      "item2 vline item4";
    grid-template-columns: 1fr 94px 1fr;
    gap: 64px 0;
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media ${QUERIES.tabletAndUp} {
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
  }

  @media ${QUERIES.laptopAndUp} {
    gap: 32px;
  }
`;

const Heading = styled.h2`
  font-size: 0.625rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  color: inherit;

  @media ${QUERIES.tabletAndUp} {
    font-size: 0.8125rem;
    letter-spacing: 0.1625rem;
  }

  @media ${QUERIES.laptopAndUp} {
    font-size: 0.9375rem;
    letter-spacing: 0.1875rem;
  }
`;

const SugHeading = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: inherit;

  @media ${QUERIES.tabletAndUp} {
    font-size: 2.5rem;
    letter-spacing: 0;
  }

  @media ${QUERIES.laptopAndUp} {
    font-size: 3.5rem;
  }
`;

const VerticalLine = styled.li`
  grid-area: vline;
  display: none;
  background-color: hsl(var(--color-text) / 0.25);

  @media ${QUERIES.laptopAndUp} {
    display: block;
    width: 1px;
    margin-top: -20px;
    margin-bottom: -20px;
  }
`;

const ListItem1 = styled(ListItem)`
  grid-area: item1;
`;
const ListItem2 = styled(ListItem)`
  grid-area: item2;
`;
const ListItem3 = styled(ListItem)`
  grid-area: item3;
`;
const ListItem4 = styled(ListItem)`
  grid-area: item4;
`;
