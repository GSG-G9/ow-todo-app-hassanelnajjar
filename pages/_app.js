import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from '../components/Provider';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        <title>Todo App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
