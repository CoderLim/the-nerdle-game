'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import GameBoard from '@/components/GameBoard';
import Keyboard from '@/components/Keyboard';
import HelpModal from '@/components/HelpModal';
import StatsModal from '@/components/StatsModal';
import { useGameState } from '@/hooks/useGameState';

export default function Home() {
  const {
    guesses,
    currentGuess,
    gameStatus,
    answer,
    stats,
    errorMessage,
    keyStates,
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
      // 延迟显示统计，等待动画完成
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
        {/* 游戏面板 */}
        <div className={`mb-4 sm:mb-8 ${shake ? 'animate-shake' : ''}`}>
          <GameBoard
            guesses={guesses}
            currentGuess={currentGuess}
            animateLastRow={animateLastRow}
          />
        </div>

        {/* 错误消息 */}
        {errorMessage && (
          <div className="mb-4 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium animate-fadeIn">
            {errorMessage}
          </div>
        )}

        {/* 游戏状态消息 */}
        {gameStatus === 'won' && (
          <div className="mb-4 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium animate-fadeIn">
            🎉 恭喜你猜对了！
          </div>
        )}
        {gameStatus === 'lost' && (
          <div className="mb-4 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium animate-fadeIn">
            😔 很遗憾，正确答案是：{answer}
          </div>
        )}

        {/* 虚拟键盘 */}
        <Keyboard
          onKeyPress={handleKeyPress}
          onBackspace={handleBackspace}
          onEnter={handleEnter}
          keyStates={keyStates}
          disabled={gameStatus !== 'playing'}
        />
      </main>

      {/* 模态框 */}
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

      {/* 页脚 */}
      <footer className="text-center py-4 text-gray-500 text-sm border-t border-gray-800">
        <p>Nerdle 数学等式猜谜游戏 © 2025</p>
        <p className="mt-1">每日挑战，锻炼你的数学思维</p>
      </footer>
    </div>
  );
}
