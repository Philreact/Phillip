import { AppProps } from "next/app";
import "../styles.scss";
import Store from "../components/store/Store";
import "react-toastify/dist/ReactToastify.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  );
}
