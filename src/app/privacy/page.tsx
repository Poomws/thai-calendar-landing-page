import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-4 py-4 lg:py-10">
      {/* Top Navigation */}
      <TopNav />
      
      <div className="relative w-full max-w-4xl mb-8 mt-6 lg:mt-18">
        <div className="absolute -right-1 -bottom-1 w-full h-full bg-gray-700"></div>
        <div className="relative bg-white backdrop-blur-sm p-4 sm:p-6 lg:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#B8860B]">Privacy Policy for Thai Calendar</h1>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Effective Date: January 21, 2026</p>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">App Name: Thai Calendar</p>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">1. Overview</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Thai Calendar (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), operated by Gobek Labs Co., Ltd., is a calendar app focused on Thai dates, Buddhist Era (B.E.) years, and holidays. The App does not require an account and does not include in-app purchases. This Privacy Policy explains what data we collect (if any) and how we use and protect it when you use our application (&quot;App&quot;).
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">2. Information We Collect</h2>
            
            <p className="text-sm sm:text-base text-black font-semibold mb-2 mt-4">a. Personal Information</p>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              We do not require you to create an account and we do not ask you to provide personal information (such as your name, email address, or phone number) to use the App.
            </p>

            <p className="text-sm sm:text-base text-black font-semibold mb-2 mt-4">b. Usage & Diagnostics (Optional)</p>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              If we enable analytics or crash reporting, we may collect basic usage and diagnostics information (such as feature usage, app performance, crash logs, and device/OS version). This information is used to improve reliability and user experience and is not used for advertising.
            </p>

            <p className="text-sm sm:text-base text-black font-semibold mb-2 mt-4">c. Data Minimization & Purpose Limitation</p>
            <p className="text-sm sm:text-base text-gray-600">
              We collect only the information necessary to operate and improve the App. We do not sell your data.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">3. How We Use Your Information</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-2">We use the information collected to:</p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
              <li>Provide and operate core calendar features</li>
              <li>Maintain and improve App performance and reliability</li>
              <li>Respond to support requests and inquiries</li>
              <li>Understand aggregate usage to improve the App (if analytics are enabled)</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">4. Third-Party Services We Use</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-2">We may use trusted service providers to operate the App and website:</p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
              <li><strong>App Store / Platform Providers</strong>: Distribution and platform-level diagnostics handled by Apple/Google under their policies.</li>
              <li><strong>Analytics / Crash Reporting (if enabled)</strong>: Used to understand usage and fix issues. If enabled, we will update this policy to name the provider.</li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4">
              We do not sell, rent, or trade your personal data. We do not use collected data to track you across apps or websites owned by other companies for advertising purposes.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">5. Data Security</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              We implement industry-standard security measures to protect your data.
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
              <li>Encryption of data in transit (where applicable).</li>            
              <li>Regular security updates.</li>                   
              <li>Limited access to personal data on a need-to-know basis.</li>            
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">6. Your Rights and Data Control</h2>
            <p className="text-sm sm:text-base text-gray-600">You have the right to:</p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
              <li>Access and request copies of your personal data.</li>
              <li>Correct or update your information.</li>
              <li>Opt out of non-essential communications.</li>
              <li>Withdraw consent for data processing (where applicable).</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">7. Data Retention and Deletion</h2>
            <p className="text-sm sm:text-base text-gray-600">
              We retain data only as long as necessary to provide the App and comply with legal obligations. If the App stores preferences locally on your device (such as display settings), you can remove them by uninstalling the App.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">8. Children&apos;s Privacy</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Thai Calendar is not directed to children under the age of 13. We do not knowingly collect personal data from children.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">9. Accuracy Disclaimer</h2>
            <p className="text-sm sm:text-base text-gray-600">
              The App provides calendar information for convenience. While we aim for accuracy (including B.E./C.E. conversion and holiday information), we do not guarantee that all dates and holiday lists are error-free or always up to date.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">10. International Data Transfers</h2>
            <p className="text-sm sm:text-base text-gray-600">Your data may be transferred to and processed in countries outside your jurisdiction, including the United States, where our servers are located. These countries may have different data protection laws than your jurisdiction. We implement appropriate safeguards to ensure your data is protected and processed in compliance with applicable laws.</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">11. Changes to This Policy</h2>
            <p className="text-sm sm:text-base text-gray-600">We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy in the app and updating the effective date above.</p>
          </section>
        </div>
      </div>
      <div className="w-full max-w-4xl">
        <Footer />
      </div>
    </div>
  );
}