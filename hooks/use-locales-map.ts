import { useRouter } from 'next/router';

export default function useLocalesMap(localesMap) {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  if (!localesMap) {
    throw new Error('请将 localesMap 作为参数传递给 useLocalesMap 函数');
  }

  if (!isObject(localesMap)) {
    throw new Error('localesMap 必须是一个对象');
  }

  if (!localesMap.hasOwnProperty(defaultLocale)) {
    throw new Error(`localesMap 必须包含默认语言环境"${defaultLocale}"`);
  }

  if (
    localesMap.hasOwnProperty(locale) &&
    typeof localesMap[locale] !== typeof localesMap[defaultLocale]
  ) {
    throw new Error(
      `无效的localesMap: "${locale}"的结构必须与"${defaultLocale}"相同`,
    );
  }

  return localesMap[locale] || localesMap[defaultLocale];
}

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}
