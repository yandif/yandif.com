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

  if (
    ['string', 'number', 'symbol'].includes(typeof localesMap[defaultLocale])
  ) {
    return localesMap[locale] || localesMap[defaultLocale];
  }

  const target = JSON.parse(JSON.stringify(localesMap[defaultLocale]));
  return mergeDeep(target, localesMap[locale]);
}

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}
