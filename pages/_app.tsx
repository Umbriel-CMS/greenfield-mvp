import CustomStyles from '@app/theme';
import '../styles/styles.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <CustomStyles>
      <Component {...pageProps} />
      </CustomStyles>
    </main>
  );
}

export default MyApp;
