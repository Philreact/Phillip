import { AppProps } from "next/app";
import "../styles.scss";
import Store from "../components/store/Store";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Store>
        <Component {...pageProps} />
      </Store>
    </AnimatePresence>
  );
}
