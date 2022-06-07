import React from "react";
import styled from "styled-components";
import Icon from "../../public/images/icon-refresh.svg";
import { COLORS, QUERIES } from "../../utils/constants";

export default function Quotes() {
  return (
    <Wrapper>
      <QuoteWrapper>
        <Quote>
          {`“The science of operations, as derived from mathematics more especially, 
             is a science of itself, and has its own abstract truth and value.”`}
        </Quote>
        <Author>{`Ada Lovelace`}</Author>
      </QuoteWrapper>
      <Button>
        <RefreshIcon />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  max-width: 540px;
`;

const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: hsl(${COLORS.white});
  gap: 8px;
  @media ${QUERIES.tabletAndUp} {
    gap: 13px;
  }
`;

const Quote = styled.span`
  font-size: 0.75rem;
  line-height: 1.375rem;
  color: inherit;

  @media ${QUERIES.tabletAndUp} {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const Author = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: inherit;
  @media ${QUERIES.tabletAndUp} {
    font-size: 18px;
  }
`;

const RefreshIcon = styled(Icon)`
  width: 18px;
  height: 18px;
`;

const Button = styled.button`
  flex: 0 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: transparent;
  transform: translateY(-2px);
`;
