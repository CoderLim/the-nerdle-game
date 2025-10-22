'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

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

// 路径到语言的映射
const pathToLanguage: Record<string, Language> = {
  '/': 'en',
  '/zh': 'zh',
  '/jp': 'ja',
  '/ko': 'ko',
  '/pt': 'pt',
  '/es': 'es',
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ 
  children,
  initialLanguage = 'en'
}: { 
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const [translations, setTranslations] = useState<Record<string, string>>({});

  // 从 URL 路径检测语言
  useEffect(() => {
    const detectedLang = detectLanguageFromPath(pathname);
    if (detectedLang !== language) {
      setLanguageState(detectedLang);
    }
  }, [pathname]);

  // 加载翻译文件
  useEffect(() => {
    import(`./translations/${language}.json`)
      .then((module) => {
        setTranslations(module.default);
      })
      .catch(() => {
        console.error(`Failed to load translations for ${language}`);
      });
  }, [language]);

  const setLanguage = (lang: Language) => {
    const targetPath = languages.find(l => l.code === lang)?.path || '/';
    router.push(targetPath);
  };

  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

// 从路径检测语言
export function detectLanguageFromPath(pathname: string): Language {
  // 检查特殊路径
  if (pathname === '/privacy' || pathname === '/terms') {
    return 'en'; // privacy 和 terms 始终使用英文
  }

  // 检查路径前缀
  for (const [path, lang] of Object.entries(pathToLanguage)) {
    if (pathname === path || pathname.startsWith(path + '/')) {
      return lang;
    }
  }

  return 'en'; // 默认英文
}

