import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-800 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4">
        <p className="mb-2">Nerdle - Math Equation Puzzle Game © 2025</p>
        <p className="mb-4">Daily challenge to exercise your mathematical thinking</p>
        
        <div className="flex items-center justify-center gap-4 text-xs flex-wrap">
          <a 
            href="https://github.com/coderlim/the-nerdle-game" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors duration-200"
          >
            GitHub
          </a>
          <span className="text-gray-700">|</span>
          <a 
            href="https://chromewebstore.google.com/detail/nerdle-game-launcher/amfhlibeegkheaikcojjlhihkpggfhbc?hl=zh-CN&utm_source=ext_sidebar" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors duration-200"
          >
            Chrome Extension
          </a>
          <span className="text-gray-700">|</span>
          <Link 
            href="/privacy" 
            className="text-gray-400 hover:text-green-400 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-700">|</span>
          <Link 
            href="/terms" 
            className="text-gray-400 hover:text-green-400 transition-colors duration-200"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}

