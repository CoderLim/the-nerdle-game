// 单个字符方格组件

import { TileState } from '@/lib/game-logic';

interface TileProps {
  char: string;
  state: TileState;
  animate?: boolean;
  delay?: number;
}

export default function Tile({ char, state, animate = false, delay = 0 }: TileProps) {
  const getStateClasses = () => {
    switch (state) {
      case 'correct':
        return 'bg-green-600 border-green-600 text-white';
      case 'present':
        return 'bg-purple-600 border-purple-600 text-white';
      case 'absent':
        return 'bg-gray-700 border-gray-700 text-white';
      case 'tbd':
        return 'bg-gray-900 border-gray-600 text-white';
      default:
        return 'bg-gray-900 border-gray-600 text-white';
    }
  };

  const animationClass = animate ? 'animate-flip' : '';
  const delayStyle = animate ? { animationDelay: `${delay}ms` } : {};

  return (
    <div
      className={`
        w-11 h-11 sm:w-12 sm:h-12 md:w-16 md:h-16 
        border-2 rounded
        flex items-center justify-center
        text-xl sm:text-2xl md:text-3xl font-bold
        transition-colors duration-300
        ${getStateClasses()}
        ${animationClass}
      `}
      style={delayStyle}
    >
      {char}
    </div>
  );
}

