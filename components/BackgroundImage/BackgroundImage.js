import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { useTheme } from "next-themes";
import { BACKGROUND_IMAGES, COLORS } from "../../utils/constants";

function BackgroundImage() {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = `${BACKGROUND_IMAGES.light}`;
      break;
    case "dark":
      src = `${BACKGROUND_IMAGES.dark}`;
      break;
    default:
      src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      break;
  }

  return (
    <BgImageWrapper>
      <BgImage
        src={src}
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
  opacity: 0.2;
`;

export default BackgroundImage;
