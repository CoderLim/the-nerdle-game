// 服务器端 i18n 工具
export type Language = 'en' | 'zh' | 'ja' | 'ko' | 'pt' | 'es';

export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
  path: string;
}

export const languages: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', path: '/' },
  { code: 'zh', name: 'Chinese', nativeName: '简体中文', path: '/zh' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', path: '/jp' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', path: '/ko' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', path: '/pt' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', path: '/es' },
];

// 路径到语言代码的映射
export const pathToLanguage: Record<string, Language> = {
  '/': 'en',
  '/zh': 'zh',
  '/jp': 'ja',
  '/ko': 'ko',
  '/pt': 'pt',
  '/es': 'es',
};

// 语言代码到路径的映射
export const languageToPath: Record<Language, string> = {
  'en': '/',
  'zh': '/zh',
  'ja': '/jp',
  'ko': '/ko',
  'pt': '/pt',
  'es': '/es',
};

// 获取翻译文本
export async function getTranslations(lang: Language) {
  try {
    const translations = await import(`./translations/${lang}.json`);
    return translations.default;
  } catch (error) {
    console.error(`Failed to load translations for ${lang}`, error);
    const fallback = await import(`./translations/en.json`);
    return fallback.default;
  }
}

// 创建翻译函数
export function createT(translations: Record<string, string>) {
  return (key: string): string => {
    return translations[key] || key;
  };
}

