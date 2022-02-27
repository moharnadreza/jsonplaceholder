import Head from "next/head";

import Navbar from "components/Navbar";
import type { ReactChild } from "react";

type Props = {
  children: ReactChild;
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="RTL fake REST/GraphQL API for testing and prototyping."
        />
        <title>
          jsonplaceholder | RTL fake REST/GraphQL API for testing and
          prototyping.
        </title>
      </Head>
      <div className="max-w-screen-sm xl:max-w-screen-md mx-auto px-8">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
