import { FC } from "react";
import Head from "next/head";

import { Navbar } from "components";

const Layout: FC = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="max-w-screen-sm xl:max-w-screen-md mx-auto px-8">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
