import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: '在线玩 Nerdle 游戏 - 解决数学谜题',
  description: '玩 Nerdle，一款挑战你数字逻辑的数学益智游戏。解决谜题，提高你的技能，享受数小时的乐趣！',
};

export default async function ZhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const translations = await getTranslations('zh');
  
  return (
    <I18nProvider initialLanguage="zh" initialTranslations={translations}>
      {children}
    </I18nProvider>
  );
}

