// localStorage 工具函数

import { GuessResult } from './game-logic';

export interface GameStats {
  gamesPlayed: number;
  gamesWon: number;
  currentStreak: number;
  maxStreak: number;
  guessDistribution: number[]; // 6个元素，分别代表1-6次猜中的次数
  lastPlayedDate: string;
}

export interface SavedGameState {
  guesses: GuessResult[];
  currentGuess: string;
  gameStatus: 'playing' | 'won' | 'lost';
  answer: string;
  date: string;
}

const GAME_STATE_KEY = 'nerdle-game-state';
const STATS_KEY = 'nerdle-stats';
const DAILY_ANSWER_KEY = 'nerdle-daily-answer';

/**
 * 检查是否在浏览器环境
 */
function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

/**
 * 保存游戏状态
 */
export function saveGameState(state: SavedGameState): void {
  if (!isBrowser()) return;
  
  try {
    localStorage.setItem(GAME_STATE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save game state:', error);
  }
}

/**
 * 加载游戏状态
 */
export function loadGameState(): SavedGameState | null {
  if (!isBrowser()) return null;
  
  try {
    const saved = localStorage.getItem(GAME_STATE_KEY);
    if (!saved) return null;
    
    return JSON.parse(saved) as SavedGameState;
  } catch (error) {
    console.error('Failed to load game state:', error);
    return null;
  }
}

/**
 * 清除游戏状态
 */
export function clearGameState(): void {
  if (!isBrowser()) return;
  
  try {
    localStorage.removeItem(GAME_STATE_KEY);
  } catch (error) {
    console.error('Failed to clear game state:', error);
  }
}

/**
 * 获取游戏统计数据
 */
export function getStats(): GameStats {
  if (!isBrowser()) {
    return getDefaultStats();
  }
  
  try {
    const saved = localStorage.getItem(STATS_KEY);
    if (!saved) return getDefaultStats();
    
    return JSON.parse(saved) as GameStats;
  } catch (error) {
    console.error('Failed to load stats:', error);
    return getDefaultStats();
  }
}

/**
 * 保存游戏统计数据
 */
export function saveStats(stats: GameStats): void {
  if (!isBrowser()) return;
  
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (error) {
    console.error('Failed to save stats:', error);
  }
}

/**
 * 更新统计数据（游戏结束时调用）
 */
export function updateStats(won: boolean, guessCount: number, currentDate: string): GameStats {
  const stats = getStats();
  
  stats.gamesPlayed++;
  
  if (won) {
    stats.gamesWon++;
    // guessCount 从 1 开始，数组索引从 0 开始
    if (guessCount >= 1 && guessCount <= 6) {
      stats.guessDistribution[guessCount - 1]++;
    }
    
    // 更新连胜
    if (stats.lastPlayedDate) {
      const lastDate = new Date(stats.lastPlayedDate);
      const currentDateObj = new Date(currentDate);
      const diffDays = Math.floor((currentDateObj.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        // 连续的一天
        stats.currentStreak++;
      } else if (diffDays === 0) {
        // 同一天（不应该发生，但保护一下）
        // 不改变连胜
      } else {
        // 中断了连胜
        stats.currentStreak = 1;
      }
    } else {
      stats.currentStreak = 1;
    }
    
    // 更新最大连胜
    if (stats.currentStreak > stats.maxStreak) {
      stats.maxStreak = stats.currentStreak;
    }
  } else {
    // 输了，重置连胜
    stats.currentStreak = 0;
  }
  
  stats.lastPlayedDate = currentDate;
  saveStats(stats);
  
  return stats;
}

/**
 * 获取默认统计数据
 */
function getDefaultStats(): GameStats {
  return {
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    maxStreak: 0,
    guessDistribution: [0, 0, 0, 0, 0, 0],
    lastPlayedDate: '',
  };
}

/**
 * 每日题目缓存接口
 */
export interface DailyAnswerCache {
  answer: string;
  date: string;
  source: 'api' | 'fallback'; // 记录题目来源
}

/**
 * 保存每日题目到缓存
 */
export function saveDailyAnswer(answer: string, date: string, source: 'api' | 'fallback'): void {
  if (!isBrowser()) return;
  
  try {
    const cache: DailyAnswerCache = { answer, date, source };
    localStorage.setItem(DAILY_ANSWER_KEY, JSON.stringify(cache));
  } catch (error) {
    console.error('Failed to save daily answer:', error);
  }
}

/**
 * 从缓存加载每日题目
 */
export function loadDailyAnswer(currentDate: string): string | null {
  if (!isBrowser()) return null;
  
  try {
    const saved = localStorage.getItem(DAILY_ANSWER_KEY);
    if (!saved) return null;
    
    const cache = JSON.parse(saved) as DailyAnswerCache;
    
    // 检查是否是今天的题目
    if (cache.date === currentDate) {
      console.log(`使用缓存的每日题目 (来源: ${cache.source === 'api' ? 'API' : '降级方案'})`);
      return cache.answer;
    }
    
    // 如果不是今天的题目，清除缓存
    localStorage.removeItem(DAILY_ANSWER_KEY);
    return null;
  } catch (error) {
    console.error('Failed to load daily answer:', error);
    return null;
  }
}

