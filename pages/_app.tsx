import { AppProps } from 'next/app';
import '../styles/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
