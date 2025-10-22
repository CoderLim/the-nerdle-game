'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const { t } = useI18n();
  
  return (
    <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-800 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4">
        <p className="mb-2">{t('footer.copyright')}</p>
        <p className="mb-4">{t('footer.description')}</p>
        
        <div className="flex items-center justify-center gap-4 text-xs flex-wrap">
          <a 
            href="https://github.com/coderlim/the-nerdle-game" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors duration-200"
          >
            {t('footer.github')}
          </a>
          <span className="text-gray-700">|</span>
          <a 
            href="https://chromewebstore.google.com/detail/nerdle-game-launcher/amfhlibeegkheaikcojjlhihkpggfhbc?hl=zh-CN&utm_source=ext_sidebar" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors duration-200"
          >
            {t('footer.chromeExt')}
          </a>
          <span className="text-gray-700">|</span>
          <Link 
            href="/privacy" 
            className="text-gray-400 hover:text-green-400 transition-colors duration-200"
          >
            {t('footer.privacy')}
          </Link>
          <span className="text-gray-700">|</span>
          <Link 
            href="/terms" 
            className="text-gray-400 hover:text-green-400 transition-colors duration-200"
          >
            {t('footer.terms')}
          </Link>
        </div>
      </div>
    </footer>
  );
}

