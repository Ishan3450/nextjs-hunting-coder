// installed bootstrap and imported the bootstrap file globally for all of our pages
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
