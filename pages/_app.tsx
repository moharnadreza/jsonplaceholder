import { AppProps } from "next/app";
import splitbee from "@splitbee/web";

import { Layout } from "components";
import { SPLITBEE_TOKEN } from "configs";
import "styles/globals.css";

splitbee.init({
  token: SPLITBEE_TOKEN,
});

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
