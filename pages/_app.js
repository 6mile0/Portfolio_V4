import '../node_modules/spectre.css/dist/spectre.min.css'
import '../node_modules/spectre.css/dist/spectre-exp.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
