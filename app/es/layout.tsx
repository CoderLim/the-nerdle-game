import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: 'Juega a Nerdle en Línea - Resuelve Acertijos Matemáticos',
  description: 'Juega a Nerdle, un juego de rompecabezas basado en matemáticas que desafía tu lógica numérica. Resuelve acertijos, mejora tus habilidades y diviértete durante horas!',
};

export default async function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const translations = await getTranslations('es');
  
  return (
    <I18nProvider initialLanguage="es" initialTranslations={translations}>
      {children}
    </I18nProvider>
  );
}

