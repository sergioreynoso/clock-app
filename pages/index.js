import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import Head from "next/head";
import ClockApp from "../components/ClockApp/ClockApp";

const Home = () => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/favicon-32x32.png"
        />
        <title>Frontend Mentor - Clock App</title>
      </Head>
      <ClockApp />;
    </>
  );
};

export default Home;
