// 顶部导航组件

'use client';

import { useState } from 'react';
import { useI18n, languages, type Language } from '@/lib/i18n';

interface HeaderProps {
  onHelpClick: () => void;
  onStatsClick: () => void;
}

export default function Header({ onHelpClick, onStatsClick }: HeaderProps) {
  const { language, setLanguage, t } = useI18n();
  const [showLangMenu, setShowLangMenu] = useState(false);

  return (
    <header className="border-b border-gray-700 mb-4 sm:mb-8">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
        <button
          onClick={onHelpClick}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={t('header.help')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>

        <h1 className="text-2xl sm:text-3xl font-bold text-white">{t('app.title')}</h1>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* 语言切换器 */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
              aria-label="Change language"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
            </button>
            
            {showLangMenu && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowLangMenu(false)}
                />
                <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50 py-1">
                  {languages.map((lang) => (
                    <a
                      key={lang.code}
                      href={lang.path}
                      onClick={() => setShowLangMenu(false)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        language === lang.code
                          ? 'bg-green-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {lang.nativeName}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>

          <button
            onClick={onStatsClick}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={t('header.stats')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

