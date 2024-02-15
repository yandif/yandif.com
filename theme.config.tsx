import { ThemeConfig } from 'nextra-theme-infp';
import styles from './theme.module.css';
import useLocalesMap from './hooks/use-locales-map';
import { Anchor, Box } from '@mantine/core';

const themeConfig: ThemeConfig = {
  faviconGlyph: '📖',
  docsRepositoryBase: 'https://github.com/yandif/yandif.com/tree/main',
  logo: <span className={styles.logo}>札记</span>,
  head: <meta name="description" content="yandif's  blog" />,
  headerActions: {
    github: 'https://github.com/yandif',
    toggleTheme: true,
  },
  footer: () =>
    useLocalesMap({
      'zh-CN': (
        <Box className="nx-text-sm">
          除非另有说明，所有文章均根据{' '}
          <Anchor
            className="nx-text-primary-600"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
            target="_blank">
            BY-NC-SA
          </Anchor>{' '}
          进行许可。
        </Box>
      ),
      'en-US': (
        <Box>
          All articles are licensed under{' '}
          <Anchor
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en"
            target="_blank">
            BY-NC-SA
          </Anchor>{' '}
          unless stating additionally.
        </Box>
      ),
    }),
};

export default themeConfig;
