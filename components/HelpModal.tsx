// Help and game rules modal

import Modal from './Modal';
import Tile from './Tile';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelpModal({ isOpen, onClose }: HelpModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="How to Play Nerdle">
      <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-base">
        {/* Game Objective */}
        <section>
          <h3 className="text-lg font-bold text-white mb-2">🎯 Game Objective</h3>
          <p>Guess the correct math equation in 6 tries. After each guess, the color of the tiles will change to show how close your guess was to the answer.</p>
        </section>

        {/* Game Rules */}
        <section>
          <h3 className="text-lg font-bold text-white mb-2">🔢 Game Rules</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Each equation consists of <strong>8 characters</strong></li>
            <li>Must contain one equals sign (=)</li>
            <li>Right side of equals must be a number</li>
            <li>Available operators: +, -, *, /</li>
            <li>Follows standard order of operations (multiply/divide before add/subtract)</li>
            <li>Equation must be mathematically correct</li>
            <li>No leading zeros or negative numbers</li>
          </ul>
        </section>

        {/* Color Guide */}
        <section>
          <h3 className="text-lg font-bold text-white mb-3">🎨 Color Guide</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Tile char="9" state="correct" />
              <div>
                <p className="font-semibold text-green-400">Green</p>
                <p className="text-sm">Character is in the correct position</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Tile char="2" state="present" />
              <div>
                <p className="font-semibold text-purple-400">Purple</p>
                <p className="text-sm">Character is in the equation but wrong position</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Tile char="1" state="absent" />
              <div>
                <p className="font-semibold text-gray-400">Gray</p>
                <p className="text-sm">Character is not in the equation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Example */}
        <section>
          <h3 className="text-lg font-bold text-white mb-2">🧩 Example</h3>
          <p className="mb-2">If the answer is: <code className="bg-gray-800 px-2 py-1 rounded">8*9-2=70</code></p>
          <p className="text-sm">And you guess: <code className="bg-gray-800 px-2 py-1 rounded">9*20=180</code></p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
            <li><strong>9</strong> shows purple (exists but wrong position)</li>
            <li><strong>*</strong> shows purple (operator exists but wrong position)</li>
            <li><strong>2</strong> shows purple (exists but wrong position)</li>
            <li><strong>0</strong> shows green (correct position)</li>
            <li>Other characters show gray (not in answer)</li>
          </ul>
        </section>

        {/* Strategy Tips */}
        <section>
          <h3 className="text-lg font-bold text-white mb-2">🧠 Strategy Tips</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Start with equations using different numbers and operators</li>
            <li>The equals sign is usually at position 5, 6, or 7</li>
            <li>Remember order of operations (multiply/divide first)</li>
            <li>Use color feedback to narrow down possibilities</li>
          </ul>
        </section>

        {/* Start button */}
        <button
          onClick={onClose}
          className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded transition-colors"
        >
          Start Playing
        </button>
      </div>
    </Modal>
  );
}
