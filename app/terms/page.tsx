import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use - Nerdle Game',
  description: 'Terms of Use for Nerdle Game - Read our terms and conditions for using the game.',
};

export default function TermsPage() {
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
          Terms of Use
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-400 mb-8">
            <strong>Last Updated:</strong> October 20, 2025
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to Nerdle Game. By accessing or using our website and game (collectively, the "Service"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use our Service. We reserve the right to modify these Terms at any time, and your continued use of the Service constitutes acceptance of any changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">2. Description of Service</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nerdle Game is a free, web-based mathematical puzzle game. The Service includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
              <li>Daily mathematical equation puzzles</li>
              <li>Interactive gameplay with immediate feedback</li>
              <li>Statistics tracking and performance monitoring</li>
              <li>Educational content and game instructions</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">3. User Eligibility</h2>
            <p className="text-gray-300 leading-relaxed">
              Our Service is available to users of all ages. However, if you are under 13 years of age, you must have permission from a parent or legal guardian before using the Service. By using our Service, you represent and warrant that you meet these eligibility requirements.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">4. User Conduct</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              When using our Service, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300 mb-4">
              <li>Use the Service only for lawful purposes</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not use automated systems or bots to play the game</li>
              <li>Not interfere with or disrupt the Service</li>
              <li>Not attempt to reverse engineer or decompile the game</li>
              <li>Not use the Service to transmit malicious code</li>
              <li>Not impersonate others or provide false information</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Violation of these terms may result in termination of your access to the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">5. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-3">5.1 Our Rights</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              All content, features, and functionality of the Service, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of Nerdle Game or its licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-3">5.2 Limited License</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for personal, non-commercial purposes. This license does not include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for commercial purposes</li>
              <li>Removing copyright or proprietary notations</li>
              <li>Transferring the materials to another person</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
              <li>Warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Accuracy, reliability, or availability</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              We do not warrant that the Service will be uninterrupted, error-free, or free from viruses or other harmful components.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, NERDLE GAME SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
              <li>Your access to or use of (or inability to access or use) the Service</li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Unauthorized access, use, or alteration of your data</li>
              <li>Any other matter relating to the Service</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">8. Indemnification</h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to defend, indemnify, and hold harmless Nerdle Game and its officers, directors, employees, contractors, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">9. Third-Party Links</h2>
            <p className="text-gray-300 leading-relaxed">
              The Service may contain links to third-party websites or services that are not owned or controlled by Nerdle Game. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Nerdle Game shall not be responsible or liable for any damage or loss caused by your use of any such content, goods, or services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">10. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms. Upon termination, your right to use the Service will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">11. Changes to the Service</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">12. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Nerdle Game operates, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in that jurisdiction.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">13. Dispute Resolution</h2>
            <p className="text-gray-300 leading-relaxed">
              Any dispute arising from or relating to the subject matter of these Terms shall be finally settled by arbitration, except that either party may seek injunctive or other equitable relief in a court of competent jurisdiction to prevent actual or threatened infringement, misappropriation, or violation of intellectual property rights.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">14. Severability</h2>
            <p className="text-gray-300 leading-relaxed">
              If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will remain in full force and effect. The failure of Nerdle Game to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">15. Entire Agreement</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Nerdle Game regarding the use of the Service and supersede all prior agreements and understandings, whether written or oral, relating to the subject matter hereof.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-400 mb-4">16. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300">
                <strong className="text-blue-400">Email:</strong> legal@thenerdlegame.com
              </p>
              <p className="text-gray-300 mt-2">
                <strong className="text-blue-400">Website:</strong> https://thenerdlegame.com
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-green-900 to-blue-900 p-6 rounded-lg border border-green-700">
            <p className="text-gray-200 text-sm mb-3">
              <strong>Acknowledgment:</strong>
            </p>
            <p className="text-gray-200 text-sm">
              By using Nerdle Game, you acknowledge that you have read these Terms of Use and agree to be bound by them. If you do not agree to these Terms, you must discontinue use of the Service immediately.
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
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-700">|</span>
            <Link 
              href="/terms" 
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

