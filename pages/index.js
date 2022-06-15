import dynamic from "next/dynamic";
import Head from "next/head";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

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
