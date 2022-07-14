import React, { memo } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useTheme } from "next-themes";
import { COLORS } from "../../utils/constants";
import DayImage from "../../public/images/background_day.jpg";
import NightImage from "../../public/images/background_night.jpg";

const BackgroundImage = () => {
  const { resolvedTheme } = useTheme();

  return (
    <BgImageWrapper>
      <Image
        src={resolvedTheme === "light" ? DayImage : NightImage}
        alt=""
        placeholder="blur"
        layout="fill"
        objectFit="cover"
        objectPosition="top center"
      />
    </BgImageWrapper>
  );
};

const BgImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsl(${COLORS.black});
  z-index: -1;
  opacity: 0.6;
`;

export default memo(BackgroundImage);
