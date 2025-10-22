import GameClient from '@/components/GameClient';
import SEOContent from '@/components/SEOContent.server';
import Footer from '@/components/Footer';
import { getTranslations } from '@/lib/i18n-server';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jogue Nerdle Online - Resolva Quebra-cabeças Matemáticos',
  description: 'Jogue Nerdle, um jogo de quebra-cabeça baseado em matemática que desafia sua lógica numérica. Resolva quebra-cabeças, melhore suas habilidades e divirta-se por horas!',
};

export default async function PtPage() {
  const translations = await getTranslations('pt');

  return (
    <>
      <GameClient />
      <SEOContent translations={translations} />
      <Footer />
    </>
  );
}

