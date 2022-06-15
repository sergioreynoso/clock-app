import React from "react";
import styled from "styled-components";

const VisuallyHidden = ({ children, ...delegated }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  color: white;
  background-color: black;
`;

export default VisuallyHidden;
