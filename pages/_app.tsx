import { MantineProvider } from '@mantine/core';
import 'nextra-theme-infp/styles.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useMantineTheme } from 'nextra-theme-infp';

export default function App({ Component, pageProps }: any) {
  const theme = useMantineTheme();
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
      <SpeedInsights />
    </MantineProvider>
  );
}
