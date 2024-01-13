import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          defer
          src="https://us.umami.is/script.js"
          data-website-id="eec4e4a0-49c4-48bf-bb12-a4c5aef473d1"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
