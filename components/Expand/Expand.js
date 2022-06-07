import React from "react";
import styled from "styled-components";
import { ANIMATION_TIME } from "../../utils/constants";

function Expand() {
  return <Wrapper>Expand</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  color: hsl(var(--color-text));
  background-color: hsl(var(--color-bg) / 0.5);
`;

export default Expand;
