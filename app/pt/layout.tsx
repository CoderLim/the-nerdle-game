import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: 'Jogue Nerdle Online - Resolva Quebra-Cabeças Matemáticos',
  description: 'Jogue Nerdle, um jogo de quebra-cabeça baseado em matemática que desafia sua lógica numérica. Resolva quebra-cabeças, melhore suas habilidades e divirta-se por horas!',
};

export default async function PtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const translations = await getTranslations('pt');
  
  return (
    <I18nProvider initialLanguage="pt" initialTranslations={translations}>
      {children}
    </I18nProvider>
  );
}

