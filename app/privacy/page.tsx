import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Nerdle Game',
  description: 'Privacy Policy for Nerdle Game - Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Game
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-400 mb-8">
            <strong>Effective Date:</strong> October 20, 2025
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to Nerdle Game ("we," "our," or "us"). We are committed to protecting your privacy and ensuring a safe online experience. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and play our game.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-3">2.1 Information You Provide</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nerdle Game is designed to be played without requiring you to create an account or provide personal information. We do not collect names, email addresses, or other personally identifiable information unless you voluntarily contact us.
            </p>

            <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you access our website, we may automatically collect certain information about your device and usage, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>IP address (anonymized)</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website or source</li>
              <li>Game statistics and performance data</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-3">2.3 Local Storage</h3>
            <p className="text-gray-300 leading-relaxed">
              We use browser local storage to save your game progress, statistics, and preferences on your device. This information is stored locally on your device and is not transmitted to our servers. You can clear this data at any time through your browser settings.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
              <li>Provide, operate, and maintain our game</li>
              <li>Improve user experience and game functionality</li>
              <li>Understand how users interact with our game</li>
              <li>Analyze usage trends and optimize performance</li>
              <li>Detect and prevent technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our game.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Types of cookies we use:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300 mt-4">
              <li><strong className="text-purple-400">Essential Cookies:</strong> Required for the game to function properly</li>
              <li><strong className="text-purple-400">Analytics Cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong className="text-purple-400">Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may use third-party service providers to help us operate our website and analyze usage. These third parties have access to your information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Third-party services we use may include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300 mt-4">
              <li>Google Analytics for website analytics</li>
              <li>PageView Analytics for usage tracking</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">6. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our game is suitable for all ages. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can take appropriate action.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">8. Your Privacy Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your information</li>
              <li>The right to object to processing</li>
              <li>The right to data portability</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Since we store most data locally on your device, you can exercise these rights by clearing your browser's local storage.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ. By using our game, you consent to such transfers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">11. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300">
                <strong className="text-blue-400">Email:</strong> privacy@thenerdlegame.com
              </p>
              <p className="text-gray-300 mt-2">
                <strong className="text-blue-400">Website:</strong> https://thenerdlegame.com
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-900 to-purple-900 p-6 rounded-lg border border-blue-700">
            <p className="text-gray-200 text-sm">
              By using Nerdle Game, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-800 mt-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-2">Nerdle - Math Equation Puzzle Game © 2025</p>
          <div className="flex items-center justify-center gap-4 text-xs">
            <Link 
              href="/privacy" 
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-700">|</span>
            <Link 
              href="/terms" 
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

