// 游戏核心逻辑

export type TileState = 'empty' | 'correct' | 'present' | 'absent' | 'tbd';

export interface GuessResult {
  guess: string;
  states: TileState[];
}

export interface GameState {
  guesses: GuessResult[];
  currentGuess: string;
  gameStatus: 'playing' | 'won' | 'lost';
  answer: string;
}

// 有效的字符集
const VALID_CHARS = '0123456789+-*/=';
const OPERATORS = '+-*/';
const NUMBERS = '0123456789';

/**
 * 生成每日答案
 * 基于日期种子生成固定的数学等式
 */
export function getDailyAnswer(): string {
  const today = new Date();
  const dateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  
  // 预定义的等式池（确保所有等式都有效且有趣）
  const equations = [
    '12+34=46',
    '8*9-2=70',
    '56/8=7',
    '3*21=63',
    '45-18=27',
    '7*8+4=60',
    '64/8=8',
    '9+9*2=27',
    '15+27=42',
    '81/9=9',
    '6*7-3=39',
    '48/6=8',
    '5*12=60',
    '36-19=17',
    '7*9-5=58',
    '72/8=9',
    '8+8*3=32',
    '54-26=28',
    '6*8+2=50',
    '90/10=9',
    '11*5=55',
    '28+14=42',
    '9*8-6=66',
    '35/5=7',
    '4*16=64',
    '77-29=48',
    '8*7+8=64',
    '42/6=7',
    '12*4=48',
    '65-38=27',
  ];
  
  // 使用日期字符串创建简单的哈希
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
    hash = hash & hash; // 转换为32位整数
  }
  
  // 使用哈希值选择等式
  const index = Math.abs(hash) % equations.length;
  return equations[index];
}

/**
 * 验证等式是否符合格式要求
 */
export function isValidEquation(equation: string): { valid: boolean; error?: string } {
  // 检查长度
  if (equation.length !== 8) {
    return { valid: false, error: '等式必须是8个字符' };
  }
  
  // 检查字符有效性
  for (const char of equation) {
    if (!VALID_CHARS.includes(char)) {
      return { valid: false, error: '包含无效字符' };
    }
  }
  
  // 检查等号
  const equalIndex = equation.indexOf('=');
  if (equalIndex === -1) {
    return { valid: false, error: '等式必须包含等号' };
  }
  
  if (equation.indexOf('=', equalIndex + 1) !== -1) {
    return { valid: false, error: '等式只能包含一个等号' };
  }
  
  // 等号位置检查（至少在位置4之后，最多在位置6）
  if (equalIndex < 4 || equalIndex > 6) {
    return { valid: false, error: '等号位置不正确' };
  }
  
  // 分割左右两边
  const leftSide = equation.substring(0, equalIndex);
  const rightSide = equation.substring(equalIndex + 1);
  
  // 检查右侧是否只有数字
  if (!/^\d+$/.test(rightSide)) {
    return { valid: false, error: '等号右侧必须是数字' };
  }
  
  // 检查前导零
  if (rightSide.length > 1 && rightSide[0] === '0') {
    return { valid: false, error: '不允许前导零' };
  }
  
  // 检查左侧格式
  if (!isValidExpression(leftSide)) {
    return { valid: false, error: '左侧表达式格式不正确' };
  }
  
  // 计算左侧结果
  try {
    const result = evaluateExpression(leftSide);
    const expected = parseInt(rightSide, 10);
    
    // 检查结果是否为整数
    if (!Number.isInteger(result)) {
      return { valid: false, error: '结果必须是整数' };
    }
    
    // 检查结果是否为负数
    if (result < 0 || expected < 0) {
      return { valid: false, error: '不允许负数' };
    }
    
    // 检查等式是否正确
    if (result !== expected) {
      return { valid: false, error: '等式计算结果不正确' };
    }
    
    return { valid: true };
  } catch (e) {
    return { valid: false, error: '表达式无法计算' };
  }
}

/**
 * 检查表达式格式是否有效
 */
function isValidExpression(expr: string): boolean {
  // 不能以运算符开头或结尾
  if (OPERATORS.includes(expr[0]) || OPERATORS.includes(expr[expr.length - 1])) {
    return false;
  }
  
  // 检查不能有连续的运算符
  for (let i = 0; i < expr.length - 1; i++) {
    if (OPERATORS.includes(expr[i]) && OPERATORS.includes(expr[i + 1])) {
      return false;
    }
  }
  
  // 检查前导零
  const parts = expr.split(/[\+\-\*\/]/);
  for (const part of parts) {
    if (part.length > 1 && part[0] === '0') {
      return false;
    }
  }
  
  return true;
}

/**
 * 计算数学表达式的结果
 * 支持 +、-、*、/ 运算符，遵循运算优先级
 */
function evaluateExpression(expr: string): number {
  // 解析表达式为数字和运算符数组
  const tokens: (number | string)[] = [];
  let currentNum = '';
  
  for (let i = 0; i < expr.length; i++) {
    const char = expr[i];
    if (NUMBERS.includes(char)) {
      currentNum += char;
    } else if (OPERATORS.includes(char)) {
      if (currentNum) {
        tokens.push(parseInt(currentNum, 10));
        currentNum = '';
      }
      tokens.push(char);
    }
  }
  if (currentNum) {
    tokens.push(parseInt(currentNum, 10));
  }
  
  // 先处理乘除
  let i = 0;
  while (i < tokens.length) {
    if (tokens[i] === '*') {
      const left = tokens[i - 1] as number;
      const right = tokens[i + 1] as number;
      tokens.splice(i - 1, 3, left * right);
    } else if (tokens[i] === '/') {
      const left = tokens[i - 1] as number;
      const right = tokens[i + 1] as number;
      tokens.splice(i - 1, 3, left / right);
    } else {
      i++;
    }
  }
  
  // 再处理加减
  i = 0;
  while (i < tokens.length) {
    if (tokens[i] === '+') {
      const left = tokens[i - 1] as number;
      const right = tokens[i + 1] as number;
      tokens.splice(i - 1, 3, left + right);
    } else if (tokens[i] === '-') {
      const left = tokens[i - 1] as number;
      const right = tokens[i + 1] as number;
      tokens.splice(i - 1, 3, left - right);
    } else {
      i++;
    }
  }
  
  return tokens[0] as number;
}

/**
 * 比较猜测和答案，返回每个字符的状态
 */
export function checkGuess(guess: string, answer: string): TileState[] {
  const states: TileState[] = new Array(8).fill('absent');
  const answerChars = answer.split('');
  const guessChars = guess.split('');
  
  // 先标记完全正确的字符
  for (let i = 0; i < 8; i++) {
    if (guessChars[i] === answerChars[i]) {
      states[i] = 'correct';
      answerChars[i] = ''; // 标记为已使用
      guessChars[i] = ''; // 标记为已处理
    }
  }
  
  // 再标记存在但位置错误的字符
  for (let i = 0; i < 8; i++) {
    if (guessChars[i] !== '' && states[i] !== 'correct') {
      const answerIndex = answerChars.indexOf(guessChars[i]);
      if (answerIndex !== -1) {
        states[i] = 'present';
        answerChars[answerIndex] = ''; // 标记为已使用
      }
    }
  }
  
  return states;
}

/**
 * 检查游戏是否获胜
 */
export function isWinningGuess(states: TileState[]): boolean {
  return states.every(state => state === 'correct');
}

/**
 * 获取今天的日期字符串（用于localStorage key）
 */
export function getTodayDateString(): string {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
}

