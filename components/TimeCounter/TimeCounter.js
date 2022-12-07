import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS, QUERIES } from "../../utils/constants";
import { getCurrentTime } from "../../utils/helpers";

const TimeCounter = () => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const timeInt = setInterval(() => {
      setTime(getCurrentTime());
    }, 10000);
    return () => clearInterval(timeInt);
  }, []);

  return <Wrapper>{time}</Wrapper>;
};

const Wrapper = styled.h1`
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

export default TimeCounter;
