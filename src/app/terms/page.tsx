import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-4 py-4 lg:py-10">
      {/* Top Navigation */}
      <TopNav />
      
      <div className="relative w-full max-w-4xl mb-8 mt-6 lg:mt-18">
        <div className="absolute -right-1 -bottom-1 w-full h-full bg-gray-700"></div>
        <div className="relative bg-white backdrop-blur-sm p-4 sm:p-6 lg:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#B8860B]">Terms of Use</h1>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Last Updated: January 21, 2026</p>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">App Name: Thai Calendar</p>

          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
            These Terms of Use (&quot;Terms&quot;) are a binding agreement between you (&quot;you&quot;) and Gobek Labs Co., Ltd. (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), the provider of the application &quot;Thai Calendar&quot; (&quot;App&quot;). These Terms govern your use of the App.
          </p>

          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
            By downloading, installing, or using the App, you acknowledge that you have read and agree to these Terms. If you do not agree, do not use the App.
          </p>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">1. License Grant</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Subject to the terms of this Agreement, the Company grants you a limited, non-exclusive, non-transferable, and revocable license to download, install, and use the App for your personal, non-commercial use on a mobile device owned or otherwise controlled by you, strictly in accordance with the App&apos;s documentation.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">2. License Restrictions</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-2">You agree not to:</p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
              <li>Copy the App, except as expressly permitted by this license.</li>
              <li>Modify, translate, adapt, or otherwise create derivative works or improvements of the App.</li>
              <li>Reverse engineer, disassemble, decompile, decode, or otherwise attempt to derive or gain access to the source code of the App.</li>
              <li>Rent, lease, lend, sell, sublicense, assign, distribute, publish, transfer, or otherwise make available the App or any features or functionality of the App, to any third party for any reason.</li>
              <li>Remove, delete, alter, or obscure any trademarks or any copyright, trademark, patent, or other intellectual property or proprietary rights notices from the App.</li>
              <li>Use the App in any manner that could damage, disable, overburden, or impair the App or servers/networks connected to the App.</li>
              <li>Attempt to gain unauthorized access to any portion or feature of the App.</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">3. Disclaimer</h2>
            <p className="text-sm sm:text-base text-gray-600">
              The App is provided for informational and planning purposes. While we strive for accurate date conversion (including B.E./C.E.) and holiday information, the App is provided &quot;as is&quot; and we do not guarantee completeness or accuracy in all cases.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">4. Pricing</h2>
            <p className="text-sm sm:text-base text-gray-600">
              The App is free to download and use. We do not require you to create an account, and we do not offer in-app purchases or subscriptions.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">5. User Content and Conduct</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-2">You agree not to:</p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
              <li>Harass, abuse, or harm other users through the App.</li>
              <li>Post, upload, or transmit content that is illegal, offensive, defamatory, or violates others&apos; rights.</li>
              <li>Engage in any conduct that is harmful to the App community or violates these Terms.</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">6. Intellectual Property</h2>
            <p className="text-sm sm:text-base text-gray-600">
              You acknowledge that the App is provided under license, and not sold, to you. You do not acquire any ownership interest in the App under this Agreement, or any other rights thereto other than to use the App in accordance with the license granted. The Company and its licensors reserve and shall retain their entire right, title, and interest in and to the App, including all music, graphics, design, and gameplay content.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">7. Termination</h2>
            <p className="text-sm sm:text-base text-gray-600">
              These Terms are effective until terminated by you or the Company. Your rights under these Terms will terminate automatically without notice if you fail to comply with any term(s). Upon termination, you shall cease all use of the App and destroy all copies of the App.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">8. Disclaimer of Warranties</h2>
            <p className="text-sm sm:text-base text-gray-600">
              THE APP IS PROVIDED &quot;AS IS&quot; AND WITH ALL FAULTS AND DEFECTS WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, THE COMPANY EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, WITH RESPECT TO THE APP, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">9. Limitation of Liability</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-2">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL THE COMPANY HAVE ANY LIABILITY ARISING FROM OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP FOR:
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
              <li>PERSONAL INJURY, PROPERTY DAMAGE, LOST PROFITS, COST OF SUBSTITUTE GOODS OR SERVICES, LOSS OF DATA, OR ANY OTHER CONSEQUENTIAL, INCIDENTAL, INDIRECT, EXEMPLARY, SPECIAL, OR PUNITIVE DAMAGES.</li>
              <li>DIRECT DAMAGES IN AMOUNTS THAT IN THE AGGREGATE EXCEED THE AMOUNT ACTUALLY PAID BY YOU FOR THE APP.</li>
              <li>DECISIONS OR OUTCOMES RESULTING FROM YOUR RELIANCE ON CALENDAR INFORMATION PROVIDED BY THE APP.</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">10. Indemnification</h2>
            <p className="text-sm sm:text-base text-gray-600">
              You agree to indemnify, defend, and hold harmless the Company, its affiliates, officers, directors, employees, and agents from and against any and all claims, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or related to your use of the App or violation of these Terms.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#B8860B]">11. Governing Law</h2>
            <p className="text-sm sm:text-base text-gray-600">
              This Agreement is governed by and construed in accordance with the laws of the Kingdom of Thailand, without giving effect to any choice or conflict of law provision or rule.
            </p>
          </section>
        </div>
      </div>
      <div className="w-full max-w-4xl">
        <Footer />
      </div>
    </div>
  );
}
