// 帮助和游戏规则模态框

import Modal from './Modal';
import Tile from './Tile';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelpModal({ isOpen, onClose }: HelpModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="如何玩 Nerdle">
      <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-base">
        {/* 游戏目标 */}
        <section>
          <h3 className="text-lg font-bold text-white mb-2">🎯 游戏目标</h3>
          <p>在 6 次尝试内猜出正确的数学等式。每次猜测后，方格的颜色会变化，显示猜测与正确答案的匹配程度。</p>
        </section>

        {/* 游戏规则 */}
        <section>
          <h3 className="text-lg font-bold text-white mb-2">🔢 游戏规则</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>每个等式由 <strong>8 个字符</strong> 组成</li>
            <li>必须包含一个等号（=）</li>
            <li>等号右侧必须是一个数字</li>
            <li>可用运算符：+、-、*、/</li>
            <li>遵循标准运算顺序（先乘除，后加减）</li>
            <li>等式必须数学正确</li>
            <li>不允许前导零或负数</li>
          </ul>
        </section>

        {/* 颜色说明 */}
        <section>
          <h3 className="text-lg font-bold text-white mb-3">🎨 提示颜色说明</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Tile char="9" state="correct" />
              <div>
                <p className="font-semibold text-green-400">绿色</p>
                <p className="text-sm">该字符在正确的位置</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Tile char="2" state="present" />
              <div>
                <p className="font-semibold text-purple-400">紫色</p>
                <p className="text-sm">该字符在等式中，但位置错误</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Tile char="1" state="absent" />
              <div>
                <p className="font-semibold text-gray-400">灰色</p>
                <p className="text-sm">该字符不在等式中</p>
              </div>
            </div>
          </div>
        </section>

        {/* 示例 */}
        <section>
          <h3 className="text-lg font-bold text-white mb-2">🧩 示例</h3>
          <p className="mb-2">假设答案是：<code className="bg-gray-800 px-2 py-1 rounded">8*9-2=70</code></p>
          <p className="text-sm">如果你猜测：<code className="bg-gray-800 px-2 py-1 rounded">9*20=180</code></p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
            <li><strong>9</strong> 显示紫色（数字存在但位置错误）</li>
            <li><strong>*</strong> 显示紫色（运算符存在但位置错误）</li>
            <li><strong>2</strong> 显示紫色（数字存在但位置错误）</li>
            <li><strong>0</strong> 显示绿色（在正确位置）</li>
            <li>其他字符显示灰色（不在答案中）</li>
          </ul>
        </section>

        {/* 策略建议 */}
        <section>
          <h3 className="text-lg font-bold text-white mb-2">🧠 策略建议</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>首次猜测使用包含不同数字和运算符的等式</li>
            <li>等号通常位于第 5、6 或 7 个位置</li>
            <li>注意运算优先级（先算乘除后加减）</li>
            <li>根据颜色提示逐步缩小范围</li>
          </ul>
        </section>

        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded transition-colors"
        >
          开始游戏
        </button>
      </div>
    </Modal>
  );
}

