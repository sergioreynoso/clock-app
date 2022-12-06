import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import Head from "next/head";
import ClockApp from "../components/ClockApp/ClockApp";

const Home = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor - Clock App</title>
      </Head>
      <ClockApp />;
    </>
  );
};

export default Home;
