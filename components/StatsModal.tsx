// 统计数据模态框

'use client';

import { useEffect, useState } from 'react';
import Modal from './Modal';
import { GameStats } from '@/lib/storage';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: GameStats;
  gameStatus: 'playing' | 'won' | 'lost';
  answer?: string;
}

export default function StatsModal({ 
  isOpen, 
  onClose, 
  stats, 
  gameStatus,
  answer 
}: StatsModalProps) {
  const winRate = stats.gamesPlayed > 0 
    ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100)
    : 0;

  const maxGuessCount = Math.max(...stats.guessDistribution);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="统计数据">
      <div className="text-gray-300 space-y-4 sm:space-y-6 text-sm sm:text-base">
        {/* 游戏结果 */}
        {gameStatus !== 'playing' && (
          <div className="text-center p-4 bg-gray-800 rounded-lg">
            {gameStatus === 'won' ? (
              <>
                <p className="text-2xl font-bold text-green-400 mb-2">🎉 恭喜获胜！</p>
                <p className="text-sm">你猜对了今天的等式</p>
              </>
            ) : (
              <>
                <p className="text-2xl font-bold text-red-400 mb-2">😔 很遗憾</p>
                <p className="text-sm mb-2">正确答案是：</p>
                <p className="text-xl font-bold text-white bg-gray-900 px-4 py-2 rounded inline-block">
                  {answer}
                </p>
              </>
            )}
          </div>
        )}

        {/* 统计数据 */}
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-white">{stats.gamesPlayed}</div>
            <div className="text-xs text-gray-400">已玩次数</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">{winRate}%</div>
            <div className="text-xs text-gray-400">胜率</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">{stats.currentStreak}</div>
            <div className="text-xs text-gray-400">当前连胜</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">{stats.maxStreak}</div>
            <div className="text-xs text-gray-400">最高连胜</div>
          </div>
        </div>

        {/* 猜测分布 */}
        <div>
          <h3 className="text-sm font-bold text-white mb-3">猜测分布</h3>
          <div className="space-y-1">
            {stats.guessDistribution.map((count, index) => {
              const percentage = maxGuessCount > 0 
                ? (count / maxGuessCount) * 100 
                : 0;
              
              return (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-4 text-right text-sm">{index + 1}</div>
                  <div className="flex-1 bg-gray-800 rounded overflow-hidden">
                    <div
                      className="bg-green-600 text-white text-xs font-bold px-2 py-1 transition-all duration-500"
                      style={{ width: `${Math.max(percentage, count > 0 ? 10 : 0)}%` }}
                    >
                      {count > 0 ? count : ''}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 下一局倒计时 */}
        {gameStatus !== 'playing' && (
          <div className="text-center p-4 bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-400 mb-1">下一个 Nerdle</p>
            <p className="text-2xl font-bold text-white">
              <NextGameCountdown />
            </p>
          </div>
        )}

        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded transition-colors"
        >
          关闭
        </button>
      </div>
    </Modal>
  );
}

// 倒计时组件
function NextGameCountdown() {
  const getTimeUntilMidnight = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const diff = tomorrow.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeUntilMidnight());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{timeLeft}</span>;
}
