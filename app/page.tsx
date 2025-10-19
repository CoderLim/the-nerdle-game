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

        {/* Error message */}
        {errorMessage && (
          <div className="mb-4 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium animate-fadeIn">
            {errorMessage}
          </div>
        )}

        {/* Game status message */}
        {gameStatus === 'won' && (
          <div className="mb-4 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium animate-fadeIn">
            🎉 Congratulations! You got it!
          </div>
        )}
        {gameStatus === 'lost' && (
          <div className="mb-4 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium animate-fadeIn">
            😔 Better luck next time! The answer was: {answer}
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

      {/* SEO Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-gray-300">
        <article className="space-y-8">
          {/* Main Title */}
          <header>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Play Nerdle Game Online - A Fun Math Puzzle Challenge
            </h1>
            <p className="text-lg leading-relaxed">
              Welcome to <strong className="text-green-400">Nerdle</strong>, the exciting online puzzle game that challenges your mathematical skills. Whether you&apos;re a math enthusiast or just someone looking to test your logical thinking, <strong className="text-green-400">Nerdle</strong> is the perfect game for you. With its unique blend of numbers and logic, <strong className="text-green-400">Nerdle</strong> promises hours of fun and brain-teasing challenges.
            </p>
          </header>

          {/* How to Play */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              How to Play Nerdle
            </h2>
            <p className="mb-4 leading-relaxed">
              The concept of <strong className="text-green-400">Nerdle</strong> is simple yet deeply engaging. Your goal is to guess the equation that satisfies the number puzzle. Each puzzle contains six characters, representing numbers and operators. Use your knowledge of math to figure out the correct equation. The game provides feedback on each guess, helping you refine your solution with every attempt.
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-3">Steps to Play:</h3>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li><strong>Enter a Guess</strong>: Each guess should be a valid equation using numbers and operators.</li>
              <li><strong>Get Feedback</strong>: After each guess, you&apos;ll receive feedback about which numbers and operators are correct and where they should be placed.</li>
              <li><strong>Solve the Puzzle</strong>: Use the clues to determine the correct equation. Your goal is to solve it in as few attempts as possible.</li>
            </ol>
          </section>

          {/* 8 Features */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              8 Features of Nerdle You Will Love
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <div>
                  <strong className="text-white">Challenging Math Puzzles</strong>: Each puzzle is designed to test and improve your numerical reasoning.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <div>
                  <strong className="text-white">Interactive Gameplay</strong>: Feedback after every guess makes it easier to learn from your mistakes.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <div>
                  <strong className="text-white">Multiple Difficulty Levels</strong>: Start easy and gradually challenge yourself with harder puzzles.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <div>
                  <strong className="text-white">User-Friendly Interface</strong>: Play with ease on any device with Nerdle&apos;s responsive design.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <div>
                  <strong className="text-white">Play Anytime, Anywhere</strong>: No need for downloads or installations—just open the website and start playing.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <div>
                  <strong className="text-white">Free to Play</strong>: Enjoy endless gameplay without any hidden costs or ads.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <div>
                  <strong className="text-white">Competitive Leaderboards</strong>: Track your performance against other players worldwide.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <div>
                  <strong className="text-white">Educational and Fun</strong>: A perfect balance of learning and entertainment.
                </div>
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              10 FAQs About Nerdle
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">1. What is Nerdle?</h3>
                <p><strong className="text-green-400">Nerdle</strong> is a math-based puzzle game where you guess an equation based on clues given after each guess.</p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">2. How do I play Nerdle?</h3>
                <p>Enter guesses and get feedback. The feedback shows which numbers and operators are correct and their positions.</p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">3. Is Nerdle free to play?</h3>
                <p>Yes, <strong className="text-green-400">Nerdle</strong> is completely free to play.</p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">4. Can I play Nerdle on mobile?</h3>
                <p>Absolutely! <strong className="text-green-400">Nerdle</strong> is designed to be fully playable on any device, including mobile phones and tablets.</p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">5. How many attempts do I get in Nerdle?</h3>
                <p>You have six attempts to solve each puzzle.</p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">6. Is Nerdle suitable for all ages?</h3>
                <p>Yes, <strong className="text-green-400">Nerdle</strong> is suitable for anyone looking to improve their mathematical thinking.</p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">7. Can I compete with friends in Nerdle?</h3>
                <p>Yes, you can compare your scores with friends through the leaderboard.</p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">8. What is the purpose of Nerdle?</h3>
                <p><strong className="text-green-400">Nerdle</strong> helps improve your problem-solving skills and numerical logic while providing fun challenges.</p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">9. Can I play Nerdle without creating an account?</h3>
                <p>Yes, you can play without an account. However, creating one allows you to track your progress and compete on leaderboards.</p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">10. Where can I play Nerdle?</h3>
                <p>You can play <strong className="text-green-400">Nerdle</strong> directly on <a href="https://thenerdlegame.com" className="text-green-400 hover:text-green-300 underline">thenerdlegame.com</a>.</p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why Nerdle is the Best Math Puzzle Game
            </h2>
            <p className="leading-relaxed mb-4">
              If you&apos;re a fan of logic puzzles, you&apos;ll love <strong className="text-green-400">Nerdle</strong>. It combines fun with education, making it a great choice for people of all ages. The game is easy to start, but it will test your skills as you progress through increasingly difficult puzzles. Whether you&apos;re a casual player or a dedicated puzzle solver, <strong className="text-green-400">Nerdle</strong> offers a rewarding experience every time you play.
            </p>
            <p className="leading-relaxed text-lg">
              So, what are you waiting for? Head over to <a href="https://thenerdlegame.com" className="text-green-400 hover:text-green-300 underline font-semibold">thenerdlegame.com</a> and start solving your first <strong className="text-green-400">Nerdle</strong> puzzle today!
            </p>
          </section>
        </article>
      </section>

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

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500 text-sm border-t border-gray-800">
        <p>Nerdle - Math Equation Puzzle Game © 2025</p>
        <p className="mt-1">Daily challenge to exercise your mathematical thinking</p>
      </footer>
    </div>
  );
}
