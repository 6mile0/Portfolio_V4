import Head from "next/head";
import "../node_modules/spectre.css/dist/spectre.min.css";
import "../node_modules/spectre.css/dist/spectre-exp.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>6mile&apos;s Portfolio</title>
        <meta
          property="description"
          content="ろくまいるのポートフォリオです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
