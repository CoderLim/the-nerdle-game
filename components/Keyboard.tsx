// 虚拟键盘组件

import { TileState } from '@/lib/game-logic';

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
  onEnter: () => void;
  keyStates: Map<string, TileState>;
  disabled?: boolean;
}

export default function Keyboard({
  onKeyPress,
  onBackspace,
  onEnter,
  keyStates,
  disabled = false,
}: KeyboardProps) {
  const rows = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['+', '-', '*', '/', '=', '⌫', '↵'],
  ];

  const getKeyClasses = (key: string) => {
    if (disabled) {
      return 'bg-gray-800 text-gray-500 cursor-not-allowed';
    }

    const state = keyStates.get(key);
    switch (state) {
      case 'correct':
        return 'bg-green-600 text-white hover:bg-green-700';
      case 'present':
        return 'bg-purple-600 text-white hover:bg-purple-700';
      case 'absent':
        return 'bg-gray-700 text-gray-400 hover:bg-gray-600';
      default:
        return 'bg-gray-600 text-white hover:bg-gray-500';
    }
  };

  const handleKeyClick = (key: string) => {
    if (disabled) return;

    if (key === '⌫') {
      onBackspace();
    } else if (key === '↵') {
      onEnter();
    } else {
      onKeyPress(key);
    }
  };

  return (
    <div className="flex flex-col gap-2 max-w-2xl mx-auto">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1 md:gap-2">
          {row.map((key) => {
            // 根据按键类型设置宽度
            let widthClass = 'w-9 sm:w-10 md:w-12'; // 默认宽度
            if (key === '↵') {
              widthClass = 'w-[110px] sm:w-[130px] md:w-[150px]'; // 回车键占三格
            } else if (key === '⌫') {
              widthClass = 'w-[74px] sm:w-[86px] md:w-[100px]'; // 删除键占两格
            }
            
            return (
              <button
                key={key}
                onClick={() => handleKeyClick(key)}
                disabled={disabled}
                className={`
                  ${widthClass}
                  h-11 sm:h-12 md:h-14
                  rounded font-bold text-base sm:text-lg
                  transition-colors duration-150
                  ${getKeyClasses(key)}
                  active:scale-95
                  touch-manipulation
                `}
              >
                {key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

