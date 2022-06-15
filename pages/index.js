import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import { ANIMATION_TIME, FADE_IN, QUERIES } from "../utils/constants";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/ClockApp/ClockApp"),
  { ssr: false }
);

const Home = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor - Clock App</title>
      </Head>
      <DynamicComponentWithNoSSR />
    </>
  );
};

export default Home;
