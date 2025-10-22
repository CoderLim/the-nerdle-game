import GameClient from '@/components/GameClient';
import SEOContent from '@/components/SEOContent.server';
import Footer from '@/components/Footer';
import { getTranslations } from '@/lib/i18n-server';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '在线玩 Nerdle 游戏 - 解决数学谜题',
  description: '玩 Nerdle，一款挑战你数字逻辑的数学益智游戏。解决谜题，提高你的技能，享受数小时的乐趣！',
};

export default async function ZhPage() {
  const translations = await getTranslations('zh');

  return (
    <>
      <GameClient />
      <SEOContent translations={translations} />
      <Footer />
    </>
  );
}

