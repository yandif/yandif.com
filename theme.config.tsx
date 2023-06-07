import { DocsThemeConfig } from 'nextra-theme-docs';
import useLocalesMap from './components/use-locales-map';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  logo: () =>
    useLocalesMap({
      'zh-CN': '学习笔记',
      'en-US': 'notes',
    }),
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
    link: 'https://github.com/yandif',
  },
  footer: {
    text: () =>
      useLocalesMap({
        'zh-CN': '文档',
        'en-US': 'DOCS',
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
  i18n: [
    // { locale: 'en-US', text: 'English' },
    // { locale: 'zh-CN', text: '中文' },
  ],
};

export default config;
