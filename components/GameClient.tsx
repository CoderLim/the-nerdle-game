'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import GameBoard from '@/components/GameBoard';
import Keyboard from '@/components/Keyboard';
import HelpModal from '@/components/HelpModal';
import StatsModal from '@/components/StatsModal';
import { useGameState } from '@/hooks/useGameState';
import { useI18n } from '@/lib/i18n';

export default function GameClient() {
  const { t } = useI18n();
  const {
    guesses,
    currentGuess,
    gameStatus,
    answer,
    stats,
    errorMessage,
    keyStates,
    isLoading,
    handleKeyPress,
    handleBackspace,
    handleEnter,
  } = useGameState();

  const [showHelp, setShowHelp] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [animateLastRow, setAnimateLastRow] = useState(false);
  const [shake, setShake] = useState(false);

  // 首次访问显示帮助
  useEffect(() => {
    const hasVisited = localStorage.getItem('nerdle-has-visited');
    if (!hasVisited) {
      setShowHelp(true);
      localStorage.setItem('nerdle-has-visited', 'true');
    }
  }, []);

  // 游戏结束时显示统计
  useEffect(() => {
    if (gameStatus === 'won' || gameStatus === 'lost') {
      setTimeout(() => {
        setShowStats(true);
      }, 2000);
    }
  }, [gameStatus]);

  // 新增猜测时触发动画
  useEffect(() => {
    if (guesses.length > 0) {
      setAnimateLastRow(true);
      setTimeout(() => setAnimateLastRow(false), 1000);
    }
  }, [guesses.length]);

  // 错误时震动
  useEffect(() => {
    if (errorMessage) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  }, [errorMessage]);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Header 
        onHelpClick={() => setShowHelp(true)}
        onStatsClick={() => setShowStats(true)}
      />

      <main className="flex-1 flex flex-col items-center justify-center px-2 sm:px-4 pb-4 sm:pb-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400 mb-4"></div>
            <p className="text-gray-400 text-sm">{t('app.loading')}</p>
          </div>
        ) : (
          <>
            <div className={`mb-4 sm:mb-8 ${shake ? 'animate-shake' : ''}`}>
              <GameBoard
                guesses={guesses}
                currentGuess={currentGuess}
                animateLastRow={animateLastRow}
              />
            </div>

            {errorMessage && (
              <div className="mb-4 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium animate-fadeIn">
                {errorMessage}
              </div>
            )}

            {gameStatus === 'won' && (
              <div className="mb-4 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium animate-fadeIn">
                {t('game.won')}
              </div>
            )}
            {gameStatus === 'lost' && (
              <div className="mb-4 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium animate-fadeIn">
                {t('game.lost').replace('{answer}', answer || '')}
              </div>
            )}

            <Keyboard
              onKeyPress={handleKeyPress}
              onBackspace={handleBackspace}
              onEnter={handleEnter}
              keyStates={keyStates}
              disabled={gameStatus !== 'playing'}
            />
          </>
        )}
      </main>

      <HelpModal 
        isOpen={showHelp} 
        onClose={() => setShowHelp(false)} 
      />
      <StatsModal
        isOpen={showStats}
        onClose={() => setShowStats(false)}
        stats={stats}
        gameStatus={gameStatus}
        answer={answer}
      />
    </div>
  );
}

