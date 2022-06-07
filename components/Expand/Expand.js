import React from "react";
import styled from "styled-components";
import { ANIMATION_TIME } from "../../utils/constants";

function Expand({ isExpand }) {
  return <Wrapper isExpand={isExpand}>Expand</Wrapper>;
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  color: hsl(var(--color-text));
  background-color: hsl(var(--color-bg) / 0.5);
  transform: translateY(${({ isExpand }) => (isExpand ? "0" : "100%")});
  transition: transform ${ANIMATION_TIME.medium} ease-in-out;
`;

export default Expand;
