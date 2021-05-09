import "../styles/globals.css";
import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";
Amplify.configure({ ...awsconfig, ssr: true });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
