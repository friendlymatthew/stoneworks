import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "@fontsource/roboto/700.css"
import "@fontsource/roboto/900-italic.css"
import "@fontsource/cabin"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
