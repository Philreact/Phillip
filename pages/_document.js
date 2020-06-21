import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  setGoogleTags() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      // dev code
    } else {
      return {
        __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'UA-159578486-1')`,
      };
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8"></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
