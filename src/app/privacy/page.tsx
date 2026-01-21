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
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#003996]">Privacy Policy for Fifteenfit</h1>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Effective Date: January 14, 2026</p>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">App Name: Fifteenfit</p>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">1. Overview</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Fifteenfit (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), operated by Gobek Labs Co., Ltd., is a fitness app that helps users achieve their health and fitness goals effectively. This Privacy Policy explains how we collect, use, and protect your personal data when you use our mobile application (&quot;App&quot;).
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">2. Information We Collect</h2>
            
            <p className="text-sm sm:text-base text-black font-semibold mb-2 mt-4">a. Personal Information (Provided by You)</p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4 mb-3">
              <li>Age</li>
              <li>Height</li>
              <li>Weight</li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              This information is used only to personalize features such as workout recommendations, fitness tracking, and in-app calculations.
              We do not use this data to identify you personally, and it is not shared with advertisers or sold to third parties.
            </p>

            <p className="text-sm sm:text-base text-black font-semibold mb-2 mt-4">b. Usage and Analytics Data (Anonymous)</p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4 mb-3">
              <li>Product interaction data (e.g., features used, workout sessions, gameplay activity)</li>
              <li>Session duration and frequency of use</li>
              <li>App performance metrics and crash reports</li>
              <li>Device information (device type and operating system version)</li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              This data is collected anonymously and is not linked to your identity.
              We use PostHog, a third-party analytics service, solely to understand app usage patterns, diagnose issues, and improve overall functionality and user experience.
            </p>

            <p className="text-sm sm:text-base text-black font-semibold mb-2 mt-4">c. Data Minimization & Purpose Limitation</p>
            <p className="text-sm sm:text-base text-gray-600">
              We collect only the information necessary to operate and improve the app. All data is processed strictly for functionality, personalization, and performance improvement purposes.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">3. How We Use Your Information</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-2">We use the information collected to:</p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
              <li>Provide and operate core features of the app</li>
              <li>Authenticate users and secure account access</li>
              <li>Track your progress and achievements</li>
              <li>Send push notifications about updates</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Conduct analytics and research to enhance the app</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">4. Third-Party Services We Use</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-2">We may share your data with the following trusted service providers:</p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
              <li><strong>PostHog</strong>: Anonymous analytics and product usage insights. Data is not linked to your identity and not used for advertising or cross-app tracking. Privacy policy: <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://posthog.com/privacy</a></li>
              <li><strong>Firebase (Google)</strong>: Analytics, authentication, and backend services</li>
              <li><strong>GEMINI</strong>: AI services for personalized fitness recommendations</li>
              <li><strong>Our backend servers</strong>: To securely manage your data and transactions</li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4">We do not sell, rent or trade your personal data to third parties for marketing purposes. We do not use collected data to track you across apps or websites owned by other companies.</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">5. Data Security</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              We implement industry-standard security measures to protect your data.
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
              <li>Encryption of data in transit and at rest.</li>            
              <li>Secure authentication protocols.</li>            
              <li>Regular security audits and updates.</li>                   
              <li>Limited access to personal data on a need-to-know basis.</li>            
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">6. Your Rights and Data Control</h2>
            <p className="text-sm sm:text-base text-gray-600">You have the right to:</p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
              <li>Access and request copies of your personal data.</li>
              <li>Correct or update your information.</li>
              <li>Delete your account and personal data.</li>
              <li>Opt out of non-essential communications.</li>
              <li>Withdraw consent for data processing (where applicable).</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">7. Data Retention and Deletion</h2>
            <p className="text-sm sm:text-base text-gray-600">We retain your data only as long as necessary to provide the app&apos;s features and services. You can delete your account and all associated data at any time through the app&apos;s settings. Once deleted, your data is permanently removed from our systems.</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">8. Children&apos;s Privacy</h2>
            <p className="text-sm sm:text-base text-gray-600">Fifteenfit is not intended for users under the age of 13. We do not knowingly collect personal data from children. If we become aware that a child under 13 has provided us with personal information, we&apos;ll delete it immediately.</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">9. Health & Physical Activity Disclaimer</h2>
            <p className="text-sm sm:text-base text-gray-600">Fifteenfit is not a medical device and does not provide medical advice. The information provided in the app is for general informational purposes only and should not be considered as professional medical advice. Always consult with a qualified healthcare provider before starting any new exercise program or making significant changes to your health or fitness routine.</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">10. International Data Transfers</h2>
            <p className="text-sm sm:text-base text-gray-600">Your data may be transferred to and processed in countries outside your jurisdiction, including the United States, where our servers are located. These countries may have different data protection laws than your jurisdiction. We implement appropriate safeguards to ensure your data is protected and processed in compliance with applicable laws.</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">11. Changes to This Policy</h2>
            <p className="text-sm sm:text-base text-gray-600">We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy in the app and updating the effective date above.</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">12. Contact Us</h2>
            <p className="text-sm sm:text-base text-gray-600">If you have any questions about this Privacy Policy or how your data is handled, please contact us at: <a href="mailto:fifteenfit.s@outlook.com" className="text-blue-600 hover:underline">fifteenfit.s@outlook.com</a></p>
          </section>
        </div>
      </div>
      <div className="w-full max-w-4xl">
        <Footer />
      </div>
    </div>
  );
}