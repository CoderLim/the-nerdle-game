import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: 'Nerdle ゲームをオンラインでプレイ - 数学パズルを解く',
  description: 'Nerdleをプレイして、数値論理に挑戦する数学ベースのパズルゲーム。パズルを解き、スキルを向上させ、何時間も楽しもう！',
};

export default async function JpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const translations = await getTranslations('ja');
  
  return (
    <I18nProvider initialLanguage="ja" initialTranslations={translations}>
      {children}
    </I18nProvider>
  );
}

