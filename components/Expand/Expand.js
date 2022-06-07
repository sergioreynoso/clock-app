import React from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/constants";

function Expand({ isExpand }) {
  return <Wrapper isExpand={isExpand}>Expand</Wrapper>;
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background-color: hsl(${COLORS.white} / 0.5);
  transform: translateY(${({ isExpand }) => (isExpand ? "0" : "100%")});
  transition: transform 0.5s ease-in-out;
`;

export default Expand;
