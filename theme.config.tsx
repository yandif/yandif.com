import { DocsThemeConfig } from 'nextra-theme-docs';
import useLocalesMap from './hooks/use-locales-map';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  logo: () => (
    <h1 style={{ fontSize: 20, color: '#228BE6' }}>
      {useLocalesMap({
        'zh-CN': '杂论',
        'en-US': 'Miscellany',
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
        titleTemplate: '杂论',
      };
    }

    return {
      titleTemplate: '%s – 杂论',
    };
  },
  footer: {
    text: () => {
      const title = useLocalesMap({
        'zh-CN': '杂论',
        'en-US': 'Miscellany',
      });

      return (
        <div>
          © {new Date().getFullYear()} {title}
        </div>
      );
    },
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
  i18n: [
    // { locale: 'en-US', text: 'English' },
    // { locale: 'zh-CN', text: '中文' },
  ],
};

export default config;
