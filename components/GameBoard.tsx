// 游戏面板组件

import { GuessResult, TileState } from '@/lib/game-logic';
import Tile from './Tile';

interface GameBoardProps {
  guesses: GuessResult[];
  currentGuess: string;
  maxGuesses?: number;
  animateLastRow?: boolean;
}

export default function GameBoard({ 
  guesses, 
  currentGuess, 
  maxGuesses = 6,
  animateLastRow = false 
}: GameBoardProps) {
  const emptyRows = maxGuesses - guesses.length - (currentGuess ? 1 : 0);

  return (
    <div className="flex flex-col gap-1.5 sm:gap-2">
      {/* 已猜测的行 */}
      {guesses.map((guess, rowIndex) => (
        <div key={rowIndex} className="flex gap-1.5 sm:gap-2">
          {guess.guess.split('').map((char, colIndex) => (
            <Tile
              key={colIndex}
              char={char}
              state={guess.states[colIndex]}
              animate={animateLastRow && rowIndex === guesses.length - 1}
              delay={colIndex * 100}
            />
          ))}
        </div>
      ))}

      {/* 当前输入行 */}
      {currentGuess && (
        <div className="flex gap-1.5 sm:gap-2">
          {Array.from({ length: 8 }).map((_, colIndex) => (
            <Tile
              key={colIndex}
              char={currentGuess[colIndex] || ''}
              state="tbd"
            />
          ))}
        </div>
      )}

      {/* 空行 */}
      {Array.from({ length: emptyRows }).map((_, rowIndex) => (
        <div key={`empty-${rowIndex}`} className="flex gap-2">
          {Array.from({ length: 8 }).map((_, colIndex) => (
            <Tile
              key={colIndex}
              char=""
              state="empty"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

