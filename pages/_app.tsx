import { MantineProvider } from '@mantine/core';
import 'nextra-theme-infp/styles.css';

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
