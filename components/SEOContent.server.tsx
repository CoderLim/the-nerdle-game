// 服务器端 SEO 内容组件
import type { Language } from '@/lib/i18n-server';

interface SEOContentProps {
  translations: Record<string, string>;
}

export default function SEOContent({ translations }: SEOContentProps) {
  const t = (key: string) => translations[key] || key;

  return (
    <section className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="prose prose-lg prose-invert max-w-none">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            {t('seo.h1')}
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">
                {t('seo.intro.title')}
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>{t('seo.intro.p1')}</p>
                <p>{t('seo.intro.p2')}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">
                {t('seo.what.title')}
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>{t('seo.what.p1')}</p>
                <p>{t('seo.what.p2')}</p>
                <p>{t('seo.what.p3')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-green-400">{t('seo.what.green')}</strong></li>
                  <li><strong className="text-purple-400">{t('seo.what.purple')}</strong></li>
                  <li><strong className="text-gray-400">{t('seo.what.black')}</strong></li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">
                {t('seo.howto.title')}
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>{t('seo.howto.p')}</p>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li><strong className="text-blue-400">{t('seo.howto.1')}</strong></li>
                  <li><strong className="text-blue-400">{t('seo.howto.2')}</strong></li>
                  <li><strong className="text-blue-400">{t('seo.howto.3')}</strong></li>
                  <li><strong className="text-blue-400">{t('seo.howto.4')}</strong></li>
                </ol>
                <p>{t('seo.howto.p2')}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">
                {t('seo.why.title')}
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>{t('seo.why.p')}</p>

                <div className="space-y-6">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">{t('seo.why.1.title')}</h3>
                    <p>{t('seo.why.1.text')}</p>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">{t('seo.why.2.title')}</h3>
                    <p>{t('seo.why.2.text')}</p>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">{t('seo.why.3.title')}</h3>
                    <p>{t('seo.why.3.text')}</p>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">{t('seo.why.4.title')}</h3>
                    <p>{t('seo.why.4.text')}</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">
                {t('seo.strategies.title')}
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>{t('seo.strategies.p')}</p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-bold text-purple-400 mb-3">{t('seo.strategies.1.title')}</h3>
                    <p>{t('seo.strategies.1.text')}</p>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-bold text-purple-400 mb-3">{t('seo.strategies.2.title')}</h3>
                    <p>{t('seo.strategies.2.text')}</p>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-bold text-purple-400 mb-3">{t('seo.strategies.3.title')}</h3>
                    <p>{t('seo.strategies.3.text')}</p>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-bold text-purple-400 mb-3">{t('seo.strategies.4.title')}</h3>
                    <p>{t('seo.strategies.4.text')}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-6 rounded-lg border border-blue-700">
                  <h3 className="text-lg font-bold text-blue-400 mb-3">{t('seo.strategies.5.title')}</h3>
                  <p>{t('seo.strategies.5.text')}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">
                {t('seo.popularity.title')}
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>{t('seo.popularity.p')}</p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li><strong className="text-green-400">{t('seo.popularity.1')}</strong></li>
                  <li><strong className="text-green-400">{t('seo.popularity.2')}</strong></li>
                  <li><strong className="text-green-400">{t('seo.popularity.3')}</strong></li>
                  <li><strong className="text-green-400">{t('seo.popularity.4')}</strong></li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">
                {t('seo.allages.title')}
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>{t('seo.allages.p1')}</p>
                <p>{t('seo.allages.p2')}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">
                {t('seo.conclusion.title')}
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>{t('seo.conclusion.text')}</p>
              </div>
            </section>

            <section className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
              <h2 className="text-xl font-bold text-yellow-400 mb-3">{t('seo.keywords.title')}</h2>
              <p className="text-gray-300">{t('seo.keywords.text')}</p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

