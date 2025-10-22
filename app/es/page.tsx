import GameClient from '@/components/GameClient';
import SEOContent from '@/components/SEOContent.server';
import Footer from '@/components/Footer';
import { getTranslations } from '@/lib/i18n-server';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Juega Nerdle en Línea - Resuelve Rompecabezas Matemáticos',
  description: 'Juega Nerdle, un juego de rompecabezas basado en matemáticas que desafía tu lógica numérica. ¡Resuelve rompecabezas, mejora tus habilidades y diviértete durante horas!',
};

export default async function EsPage() {
  const translations = await getTranslations('es');

  return (
    <>
      <GameClient />
      <SEOContent translations={translations} />
      <Footer />
    </>
  );
}

