import splitbee from "@splitbee/web";
import Layout from "components/Layout";
import { SPLITBEE_TOKEN } from "configs";
import { AppProps } from "next/app";
import "styles/globals.css";

splitbee.init({
  token: SPLITBEE_TOKEN,
});

type Props = AppProps;

const App = ({ Component, pageProps }: Props): JSX.Element => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
