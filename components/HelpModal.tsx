// Help and game rules modal

'use client';

import Modal from './Modal';
import Tile from './Tile';
import { useI18n } from '@/lib/i18n';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelpModal({ isOpen, onClose }: HelpModalProps) {
  const { t } = useI18n();
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('help.title')}>
      <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-base">
        {/* Game Objective */}
        <section>
          <h3 className="text-lg font-bold text-white mb-2">{t('help.objective.title')}</h3>
          <p>{t('help.objective.text')}</p>
        </section>

        {/* Game Rules */}
        <section>
          <h3 className="text-lg font-bold text-white mb-2">{t('help.rules.title')}</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>{t('help.rules.1')}</li>
            <li>{t('help.rules.2')}</li>
            <li>{t('help.rules.3')}</li>
            <li>{t('help.rules.4')}</li>
            <li>{t('help.rules.5')}</li>
            <li>{t('help.rules.6')}</li>
            <li>{t('help.rules.7')}</li>
          </ul>
        </section>

        {/* Color Guide */}
        <section>
          <h3 className="text-lg font-bold text-white mb-3">{t('help.colors.title')}</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Tile char="9" state="correct" />
              <div>
                <p className="font-semibold text-green-400">{t('help.colors.green')}</p>
                <p className="text-sm">{t('help.colors.green.desc')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Tile char="2" state="present" />
              <div>
                <p className="font-semibold text-purple-400">{t('help.colors.purple')}</p>
                <p className="text-sm">{t('help.colors.purple.desc')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Tile char="1" state="absent" />
              <div>
                <p className="font-semibold text-gray-400">{t('help.colors.gray')}</p>
                <p className="text-sm">{t('help.colors.gray.desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Example */}
        <section>
          <h3 className="text-lg font-bold text-white mb-2">{t('help.example.title')}</h3>
          <p className="mb-2">{t('help.example.answer')} <code className="bg-gray-800 px-2 py-1 rounded">8*9-2=70</code></p>
          <p className="text-sm">{t('help.example.guess')} <code className="bg-gray-800 px-2 py-1 rounded">9*20=180</code></p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
            <li>{t('help.example.1')}</li>
            <li>{t('help.example.2')}</li>
            <li>{t('help.example.3')}</li>
            <li>{t('help.example.4')}</li>
            <li>{t('help.example.5')}</li>
          </ul>
        </section>

        {/* Strategy Tips */}
        <section>
          <h3 className="text-lg font-bold text-white mb-2">{t('help.tips.title')}</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>{t('help.tips.1')}</li>
            <li>{t('help.tips.2')}</li>
            <li>{t('help.tips.3')}</li>
            <li>{t('help.tips.4')}</li>
          </ul>
        </section>

        {/* Start button */}
        <button
          onClick={onClose}
          className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded transition-colors"
        >
          {t('help.startPlaying')}
        </button>
      </div>
    </Modal>
  );
}
