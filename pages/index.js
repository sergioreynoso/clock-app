import styled from "styled-components";
import { FONT_SIZE, LINE_HEIGHT } from "../utils/constants";

const Title = styled.h1`
  font-size: ${FONT_SIZE.xxlarge};
  line-height: ${LINE_HEIGHT.large};
  color: var(--color-text);
`;

export default function Home() {
  return <Title>My page</Title>;
}
