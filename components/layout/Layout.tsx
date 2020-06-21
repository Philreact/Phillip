import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.scss";
import SideNav from "./SideNav/SideNav";
import classes from "./Layout.module.scss";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Layout = ({ children, title, description }: Props) => (
  <div className={styles.Layout}>
    <Head>
      <title>{title ? title : "Phillip Lang: Front-end Developer"}</title>
      <meta name="description" content={description ? description : ""}></meta>
    </Head>
    <header>
      <Navbar></Navbar>
    </header>
    <div className={classes.Content}>
      <SideNav />

      <main className={classes.main}>{children}</main>
    </div>
    <footer
      style={{
        position: "absolute",
        bottom: "0",
        width: "100%",
      }}
    >
      <Footer></Footer>
    </footer>
  </div>
);

export default Layout;
