import type { AppProps } from 'next/app';

import '../styles/globalStyles.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
