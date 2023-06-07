import type { NextraThemeLayoutProps } from 'nextra';
import Head from 'next/head';

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { title, frontMatter, headings } = pageOpts;
  
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="og:image" content={frontMatter.image} />
      </Head>
      <h1>My Theme</h1>
      Table of Contents:
      <ul>
        {headings.map((heading) => (
          <li key={heading.value}>{heading.value}</li>
        ))}
      </ul>
      <div style={{ border: '1px solid' }}>{children}</div>
    </div>
  );
}
