import GameClient from '@/components/GameClient';
import SEOContent from '@/components/SEOContent.server';
import Footer from '@/components/Footer';
import { getTranslations } from '@/lib/i18n-server';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nerdle 게임 온라인 플레이 - 수학 퍼즐 풀기',
  description: '숫자 논리에 도전하는 수학 기반 퍼즐 게임 Nerdle을 플레이하세요. 퍼즐을 풀고 기술을 향상시키며 몇 시간 동안 즐기세요!',
};

export default async function KoPage() {
  const translations = await getTranslations('ko');

  return (
    <>
      <GameClient />
      <SEOContent translations={translations} />
      <Footer />
    </>
  );
}

