// 游戏状态管理 Hook

'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  getDailyAnswer,
  isValidEquation,
  checkGuess,
  isWinningGuess,
  getTodayDateString,
  GuessResult,
  TileState,
} from '@/lib/game-logic';
import {
  loadGameState,
  saveGameState,
  clearGameState,
  getStats,
  updateStats,
  SavedGameState,
  GameStats,
} from '@/lib/storage';

export type GameStatus = 'playing' | 'won' | 'lost';

export interface UseGameStateReturn {
  guesses: GuessResult[];
  currentGuess: string;
  gameStatus: GameStatus;
  answer: string;
  stats: GameStats;
  errorMessage: string;
  keyStates: Map<string, TileState>;
  isLoading: boolean;
  handleKeyPress: (key: string) => void;
  handleBackspace: () => void;
  handleEnter: () => void;
  resetGame: () => void;
}

const MAX_GUESSES = 6;
const EQUATION_LENGTH = 8;

export function useGameState(): UseGameStateReturn {
  const [guesses, setGuesses] = useState<GuessResult[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameStatus, setGameStatus] = useState<GameStatus>('playing');
  const [answer, setAnswer] = useState('');
  const [stats, setStats] = useState<GameStats>(getStats());
  const [errorMessage, setErrorMessage] = useState('');
  const [keyStates, setKeyStates] = useState<Map<string, TileState>>(new Map());
  const [isLoading, setIsLoading] = useState(true);

  // 初始化游戏
  useEffect(() => {
    const initializeGame = async () => {
      setIsLoading(true);
      const todayDate = getTodayDateString();
      const savedState = loadGameState();

      if (savedState && savedState.date === todayDate) {
        // 加载今天的游戏进度
        setGuesses(savedState.guesses);
        setCurrentGuess(savedState.currentGuess);
        setGameStatus(savedState.gameStatus);
        setAnswer(savedState.answer);
        
        // 重建键盘状态
        const newKeyStates = new Map<string, TileState>();
        savedState.guesses.forEach((guess) => {
          guess.guess.split('').forEach((char, index) => {
            const state = guess.states[index];
            const currentState = newKeyStates.get(char);
            
            // 优先级：correct > present > absent
            if (state === 'correct') {
              newKeyStates.set(char, 'correct');
            } else if (state === 'present' && currentState !== 'correct') {
              newKeyStates.set(char, 'present');
            } else if (state === 'absent' && !currentState) {
              newKeyStates.set(char, 'absent');
            }
          });
        });
        setKeyStates(newKeyStates);
      } else {
        // 开始新游戏 - 从API获取题目
        const todayAnswer = await getDailyAnswer();
        setAnswer(todayAnswer);
        setGuesses([]);
        setCurrentGuess('');
        setGameStatus('playing');
        setKeyStates(new Map());
        clearGameState();
      }
      setIsLoading(false);
    };

    initializeGame();
  }, []);

  // 保存游戏状态
  useEffect(() => {
    if (answer) {
      const state: SavedGameState = {
        guesses,
        currentGuess,
        gameStatus,
        answer,
        date: getTodayDateString(),
      };
      saveGameState(state);
    }
  }, [guesses, currentGuess, gameStatus, answer]);

  // 处理按键输入
  const handleKeyPress = useCallback((key: string) => {
    if (isLoading || gameStatus !== 'playing') return;
    if (currentGuess.length >= EQUATION_LENGTH) return;

    setCurrentGuess((prev) => prev + key);
    setErrorMessage('');
  }, [isLoading, gameStatus, currentGuess.length]);

  // 处理退格
  const handleBackspace = useCallback(() => {
    if (isLoading || gameStatus !== 'playing') return;

    setCurrentGuess((prev) => prev.slice(0, -1));
    setErrorMessage('');
  }, [isLoading, gameStatus]);

  // 处理提交
  const handleEnter = useCallback(() => {
    if (isLoading || gameStatus !== 'playing') return;
    if (currentGuess.length !== EQUATION_LENGTH) {
      setErrorMessage('等式必须是8个字符');
      return;
    }

    // 验证等式
    const validation = isValidEquation(currentGuess);
    if (!validation.valid) {
      setErrorMessage(validation.error || '无效的等式');
      // 添加震动效果
      return;
    }

    // 检查猜测结果
    const states = checkGuess(currentGuess, answer);
    const newGuess: GuessResult = {
      guess: currentGuess,
      states,
    };

    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    setCurrentGuess('');
    setErrorMessage('');

    // 更新键盘状态
    const newKeyStates = new Map(keyStates);
    currentGuess.split('').forEach((char, index) => {
      const state = states[index];
      const currentState = newKeyStates.get(char);
      
      // 优先级：correct > present > absent
      if (state === 'correct') {
        newKeyStates.set(char, 'correct');
      } else if (state === 'present' && currentState !== 'correct') {
        newKeyStates.set(char, 'present');
      } else if (state === 'absent' && !currentState) {
        newKeyStates.set(char, 'absent');
      }
    });
    setKeyStates(newKeyStates);

    // 检查游戏是否结束
    if (isWinningGuess(states)) {
      setGameStatus('won');
      const newStats = updateStats(true, newGuesses.length, getTodayDateString());
      setStats(newStats);
    } else if (newGuesses.length >= MAX_GUESSES) {
      setGameStatus('lost');
      const newStats = updateStats(false, newGuesses.length, getTodayDateString());
      setStats(newStats);
    }
  }, [isLoading, gameStatus, currentGuess, answer, guesses, keyStates]);

  // 重置游戏（主要用于开发调试）
  const resetGame = useCallback(async () => {
    setIsLoading(true);
    clearGameState();
    const todayAnswer = await getDailyAnswer();
    setAnswer(todayAnswer);
    setGuesses([]);
    setCurrentGuess('');
    setGameStatus('playing');
    setKeyStates(new Map());
    setErrorMessage('');
    setIsLoading(false);
  }, []);

  // 监听物理键盘输入
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLoading || gameStatus !== 'playing') return;

      const key = e.key;

      if (key === 'Enter') {
        handleEnter();
      } else if (key === 'Backspace') {
        handleBackspace();
      } else if ('0123456789+-*/='.includes(key)) {
        handleKeyPress(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLoading, gameStatus, handleKeyPress, handleBackspace, handleEnter]);

  return {
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
    resetGame,
  };
}

