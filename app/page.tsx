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
      <section className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="prose prose-lg prose-invert max-w-none">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Nerdle Game: The Ultimate Math Puzzle Challenge
            </h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">
                  Introduction to Nerdle
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>Nerdle is an exciting, brain-teasing math puzzle game that challenges your arithmetic skills and strategic thinking. Inspired by the popular word-guessing game <em className="text-blue-400">Wordle</em>, Nerdle flips the script by introducing a numerical twist. Instead of guessing letters, players need to solve a mathematical equation within six tries. This game is designed for math lovers, puzzle enthusiasts, and anyone who enjoys a good challenge. With its simple rules yet complex puzzles, Nerdle has become a favorite for individuals seeking to test and improve their math skills in a fun, engaging way.</p>
                  <p>In this article, we'll dive deep into the Nerdle game mechanics, provide tips to improve your strategy, and explain why Nerdle is not just another puzzle game but an addictive experience for everyone.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">
                  What is Nerdle?
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>Nerdle is an online math puzzle game where players have to guess a hidden mathematical equation within six attempts. Each equation consists of numbers, mathematical symbols (+, -, ×, ÷, etc.), and a solution, and the player needs to guess the correct equation.</p>
                  <p>Unlike traditional puzzles, Nerdle blends elements of logic, strategy, and basic arithmetic operations. The game offers multiple levels of difficulty, making it accessible for everyone, from math novices to seasoned mathematicians.</p>
                  <p>Players need to input their guesses into the grid, and the game will provide feedback about the accuracy of their guess. The feedback is color-coded:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-green-400">Green:</strong> The number or operator is in the correct position.</li>
                    <li><strong className="text-purple-400">Purple:</strong> The number or operator is in the equation but not in the correct position.</li>
                    <li><strong className="text-gray-400">Black:</strong> The number or operator does not appear in the equation.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">
                  How to Play Nerdle?
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>Playing Nerdle is simple, but the challenge increases as you progress. Here's a step-by-step guide to playing:</p>
                  <ol className="list-decimal list-inside space-y-3 ml-4">
                    <li><strong className="text-blue-400">Make Your First Guess:</strong> The game grid consists of eight slots. You need to input a valid mathematical equation with numbers and operators.</li>
                    <li><strong className="text-blue-400">Get Feedback:</strong> After you submit your guess, the game will provide feedback with color-coded clues.</li>
                    <li><strong className="text-blue-400">Refine Your Guess:</strong> Based on the feedback, you should refine your guesses to narrow down the correct equation.</li>
                    <li><strong className="text-blue-400">Solve the Puzzle:</strong> Keep guessing until you either solve the puzzle or run out of attempts (maximum six guesses).</li>
                  </ol>
                  <p>Nerdle is not just about guessing the numbers but also involves understanding the relationships between operators and numbers. You'll need to think about which numbers make sense with specific mathematical operations to arrive at the correct equation.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">
                  Why Nerdle is a Perfect Math Puzzle for Everyone
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>Whether you're a casual player or someone who wants to sharpen your math skills, Nerdle offers a perfect balance of fun and challenge. Here's why:</p>

                  <div className="space-y-6">
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <h3 className="text-xl font-bold text-blue-400 mb-3">1. Engaging Gameplay</h3>
                      <p>Nerdle's gameplay is simple yet engaging. The challenge of guessing a math equation while receiving instant feedback keeps you on your toes, urging you to think quickly and logically. Each attempt refines your understanding of the puzzle, making each guess more educated than the last.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <h3 className="text-xl font-bold text-blue-400 mb-3">2. Improves Math Skills</h3>
                      <p>Nerdle is more than just a game—it's an educational tool. Whether you're solving basic addition problems or more complex equations, Nerdle helps players practice their arithmetic skills. By playing regularly, you can improve your number sense and mental math abilities, making it a perfect game for students, teachers, and anyone who enjoys math.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <h3 className="text-xl font-bold text-blue-400 mb-3">3. Stress-Free Fun</h3>
                      <p>Unlike many other math games that are intimidating, Nerdle is stress-free. The color-coded feedback allows players to learn from their mistakes without feeling frustrated. The game is designed to encourage critical thinking without overwhelming the player, making it ideal for those who enjoy a gentle challenge.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <h3 className="text-xl font-bold text-blue-400 mb-3">4. Daily Puzzles</h3>
                      <p>One of the most appealing aspects of Nerdle is its daily puzzles. Every day, a new puzzle is available for players to solve, which keeps the game fresh and exciting. Players can compete with friends, share solutions, or just enjoy a solo challenge to beat their personal best.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">
                  Nerdle Strategies: Tips to Improve Your Game
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>While Nerdle is easy to pick up, it's not always easy to win. Here are some tips and strategies to help you improve your gameplay and solve the puzzles faster:</p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <h3 className="text-lg font-bold text-purple-400 mb-3">1. Start with Simple Equations</h3>
                      <p>In the first few guesses, try starting with simple equations. This helps to establish a baseline and can provide useful feedback. You can start by guessing equations with small numbers and simple operations like addition or subtraction.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <h3 className="text-lg font-bold text-purple-400 mb-3">2. Focus on Operators</h3>
                      <p>Operators are key in solving Nerdle puzzles. If you get a number wrong, you may still learn something valuable about the operators used in the equation. Pay close attention to whether your guesses fit with the arithmetic structure of the equation.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <h3 className="text-lg font-bold text-purple-400 mb-3">3. Use Elimination</h3>
                      <p>One of the best ways to approach Nerdle is by using the process of elimination. Once you receive feedback, focus on eliminating numbers or operators that don't appear in the solution. This narrows down the possibilities and makes it easier to guess the correct equation.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <h3 className="text-lg font-bold text-purple-400 mb-3">4. Think About Common Equations</h3>
                      <p>When you start narrowing down the equation, think about common math equations or formulas that might fit. For example, simple multiplication or division equations like "4 × 5 = 20" are common in Nerdle puzzles, so consider these possibilities when refining your guesses.</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-6 rounded-lg border border-blue-700">
                    <h3 className="text-lg font-bold text-blue-400 mb-3">5. Stay Calm and Logical</h3>
                    <p>Nerdle can be tricky, especially if you're on your final guess. The key is to stay calm and approach the puzzle logically. Break down the problem into smaller parts, analyze the feedback carefully, and make an educated guess based on the available clues.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">
                  Why Nerdle is Gaining Popularity
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>Nerdle is gaining traction for several reasons:</p>
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li><strong className="text-green-400">It's Free and Accessible:</strong> Nerdle is completely free to play, making it accessible to a wide audience. Players don't need to download any apps or pay for a subscription to enjoy the game.</li>
                    <li><strong className="text-green-400">It's for Everyone:</strong> Whether you're a math enthusiast or a casual gamer, Nerdle offers a fun experience for all skill levels.</li>
                    <li><strong className="text-green-400">Social Media Buzz:</strong> Nerdle has gained popularity through social media platforms like Reddit and Twitter, where players share their puzzles, solutions, and achievements.</li>
                    <li><strong className="text-green-400">It's Addictive:</strong> With its daily challenges and brain-teasing gameplay, Nerdle keeps players coming back for more.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">
                  Nerdle: A Game for All Ages
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>Nerdle is suitable for players of all ages, from young children learning math to adults looking to improve their problem-solving skills. The game is a great way to practice arithmetic and logic, making it a perfect tool for students, teachers, and anyone who loves numbers.</p>
                  <p>If you're looking for a fun, educational game that sharpens your math skills, Nerdle is the perfect choice. With its engaging gameplay and daily challenges, Nerdle keeps players of all ages entertained while promoting mental math and logical thinking.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">
                  Conclusion
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>In conclusion, Nerdle is not just a math game—it's a challenge that tests your problem-solving abilities and enhances your arithmetic skills. Whether you're new to math or an experienced problem solver, Nerdle offers something for everyone. Its unique blend of fun and educational content has made it a favorite among puzzle enthusiasts worldwide. So why wait? Start solving today and see if you can crack the Nerdle code!</p>
                </div>
              </section>

              <section className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                <h2 className="text-xl font-bold text-yellow-400 mb-3">Keywords:</h2>
                <p className="text-gray-300">Nerdle, math puzzle game, daily puzzle, number games, math games, problem-solving, arithmetic, logical thinking, educational games, number sense, math lovers.</p>
              </section>
            </div>
          </div>
        </div>
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
