import GameClient from '@/components/GameClient';
import SEOContent from '@/components/SEOContent.server';
import Footer from '@/components/Footer';
import { getTranslations } from '@/lib/i18n-server';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nerdleゲームをオンラインでプレイ - 数学パズルを解く',
  description: 'Nerdleをプレイして、数値論理に挑戦する数学ベースのパズルゲーム。パズルを解き、スキルを向上させ、何時間も楽しもう！',
};

export default async function JpPage() {
  const translations = await getTranslations('ja');

  return (
    <>
      <GameClient />
      <SEOContent translations={translations} />
      <Footer />
    </>
  );
}

