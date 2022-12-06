import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { useTheme } from "next-themes";
import { COLORS } from "../../utils/constants";
import DayImage from "../../public/images/background_day.jpg";
import NightImage from "../../public/images/background_night.jpg";

const ComponentWithNoSSR = dynamic(() => import("next/image"), {
  ssr: false,
});

const BackgroundImage = () => {
  const { resolvedTheme } = useTheme();
  const imageUrl = resolvedTheme === "light" ? DayImage : NightImage;

  return (
    <BgImageWrapper>
      <ComponentWithNoSSR
        src={imageUrl}
        alt="Background Image"
        placeholder="blur"
        fill={true}
        style={{ objectFit: "cover" }}
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

export default BackgroundImage;
