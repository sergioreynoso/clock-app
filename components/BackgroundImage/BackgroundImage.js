import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { BACKGROUND_IMAGES, COLORS } from "../../utils/constants";

function BackgroundImage() {
  return (
    <BgImageWrapper>
      <BgImage
        src={BACKGROUND_IMAGES.day}
        alt="background image"
        layout="fill"
        objectFit="cover"
        objectPosition="top center"
        priority
      />
    </BgImageWrapper>
  );
}

const BgImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsl(${COLORS.black});
  z-index: -1;
`;

const BgImage = styled(Image)`
  opacity: 0.9;
`;

export default BackgroundImage;
