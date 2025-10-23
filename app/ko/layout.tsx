import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: '온라인으로 Nerdle 게임 플레이 - 수학 퍼즐 풀기',
  description: 'Nerdle를 플레이하고, 숫자 논리를 도전하는 수학 기반 퍼즐 게임. 퍼즐을 풀고, 기술을 향상시키고, 수 시간 동안 즐기세요!',
};

export default async function KoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const translations = await getTranslations('ko');
  
  return (
    <I18nProvider initialLanguage="ko" initialTranslations={translations}>
      {children}
    </I18nProvider>
  );
}

