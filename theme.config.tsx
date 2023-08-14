import { useRouter } from 'next/router';
import { DocsThemeConfig } from 'nextra-theme-docs';
import useLocalesMap from './hooks/use-locales-map';

const config: DocsThemeConfig = {
  logo: () => (
    <h1 style={{ fontSize: 20, color: '#228BE6' }}>
      {useLocalesMap({
        'zh-CN': '札记',
        'en-US': 'notes',
      })}
    </h1>
  ),
  editLink: {
    text: () =>
      useLocalesMap({
        'zh-CN': '在 GitHub 上编辑本页 →',
        'en-US': 'Edit this page on GitHub →',
      }),
  },
  feedback: {
    content: () =>
      useLocalesMap({
        'zh-CN': '有疑问？给我反馈 →',
        'en-US': 'Question? Give me feedback →',
      }),
  },
  project: {
    link: 'https://github.com/yandif/yandif.com',
  },
  docsRepositoryBase: 'https://github.com/yandif/yandif.com/blob/main/',
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (!asPath || asPath === '/') {
      return {
        titleTemplate: '自然の札记',
      };
    }

    return {
      titleTemplate: '%s',
    };
  },
  footer: {
    text: () =>
      useLocalesMap({
        'zh-CN': (
          <p className="nx-text-sm">
            除非另有说明，所有文章均根据{' '}
            <a
              className="nx-text-primary-600"
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
              target="_blank">
              BY-NC-SA
            </a>{' '}
            进行许可。
          </p>
        ),
        'en-US': (
          <p>
            All articles are licensed under{' '}
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en"
              target="_blank">
              BY-NC-SA
            </a>{' '}
            unless stating additionally.
          </p>
        ),
      }),
  },

  toc: {
    title: () =>
      useLocalesMap({
        'zh-CN': '目录',
        'en-US': 'On This Page',
      }),
  },
  gitTimestamp({ timestamp }) {
    const { locale } = useRouter();
    const message = useLocalesMap({
      'zh-CN': '最后更新于',
      'en-US': 'Last updated on',
    });

    return (
      <>
        {message + ' '}
        {timestamp.toLocaleDateString(locale, {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </>
    );
  },
  head() {
    const description = useLocalesMap({
      'zh-CN': 'Yandif 的个人博客。',
      'en-US': 'Yandif’s Blog.',
    });
    return (
      <>
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={description} />
        <link rel="icon" href="/yandif.svg" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}></script>
        <script></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
          `,
          }}
        />
      </>
    );
  },
  i18n: [
    // { locale: 'en-US', text: 'English' },
    // { locale: 'zh-CN', text: '中文' },
  ],
};

export default config;
