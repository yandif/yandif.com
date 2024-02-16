import { MantineProvider } from '@mantine/core';
import 'nextra-theme-infp/styles.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
      <SpeedInsights />
    </MantineProvider>
  );
}
