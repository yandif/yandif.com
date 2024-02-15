const withNextra = require('nextra')({
  theme: 'nextra-theme-infp',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  i18n: {
    locales: ['zh-CN'],
    defaultLocale: 'zh-CN',
  },
  experimental: {
    optimizePackageImports: [
      '@mantine/core',
      '@mantine/hooks',
      'nextra-theme-infp',
    ],
  },
});
