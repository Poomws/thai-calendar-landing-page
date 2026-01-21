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
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#003996]">End-User License Agreement (EULA)</h1>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Last Updated: January 14, 2026</p>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">App Name: Fifteenfit</p>

          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
            This End-User License Agreement (&quot;Agreement&quot;) is a binding agreement between you (&quot;End-User&quot; or &quot;you&quot;) and Gobek Labs Co., Ltd. (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), the provider of the mobile application &quot;Fifteenfit&quot; (&quot;App&quot;). This Agreement governs your use of the App.
          </p>

          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
            By downloading, installing, or using the App, you (a) acknowledge that you have read and understand this Agreement; (b) represent that you are 13 years of age or older (or have parental consent if under 13); and (c) accept this Agreement and agree that you are legally bound by its terms. If you do not agree to these terms, do not download, install, or use the App and delete it from your device.
          </p>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">1. License Grant</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Subject to the terms of this Agreement, the Company grants you a limited, non-exclusive, non-transferable, and revocable license to download, install, and use the App for your personal, non-commercial use on a mobile device owned or otherwise controlled by you, strictly in accordance with the App&apos;s documentation.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">2. License Restrictions</h2>
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
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">3. Important Disclaimers: Health and Physical Activity</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 font-semibold">
              FIFTEENFIT IS A FITNESS APPLICATION DESIGNED FOR ENTERTAINMENT AND FITNESS PURPOSES. PLEASE READ AND UNDERSTAND THESE IMPORTANT DISCLAIMERS:
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
              <li>The App is not a substitute for professional fitness coaching, medical advice, or professional health consultation.</li>
              <li>Fifteenfit involves physical activity and exercise routines. Consult with a healthcare professional or certified fitness trainer before beginning this or any other exercise program.</li>
              <li>Stop using the App immediately if you experience pain, dizziness, shortness of breath, chest pain, or any other concerning symptoms during exercise.</li>
              <li>Ensure you have adequate physical space and take regular breaks during workouts.</li>
              <li>Your body&apos;s response to fitness activities is unique. The Company is not responsible for any injuries, health consequences, or physical damage resulting from your use of the App.</li>
              <li>If you have existing health conditions, injuries, joint problems, or any medical concerns, consult with a healthcare professional before using this App.</li>
              <li>Parents and guardians are responsible for determining whether this App is appropriate for their children and supervising its use.</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">4. User Content and Conduct</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-2">You agree not to:</p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
              <li>Harass, abuse, or harm other users through the App.</li>
              <li>Create multiple accounts to circumvent restrictions or engage in fraudulent activity.</li>
              <li>Post, upload, or transmit content that is illegal, offensive, defamatory, or violates others&apos; rights.</li>
              <li>Engage in any conduct that is harmful to the App community or violates these Terms.</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">5. Intellectual Property</h2>
            <p className="text-sm sm:text-base text-gray-600">
              You acknowledge that the App is provided under license, and not sold, to you. You do not acquire any ownership interest in the App under this Agreement, or any other rights thereto other than to use the App in accordance with the license granted. The Company and its licensors reserve and shall retain their entire right, title, and interest in and to the App, including all music, graphics, design, and gameplay content.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">6. Termination</h2>
            <p className="text-sm sm:text-base text-gray-600">
              This Agreement is effective until terminated by you or the Company. Your rights under this license will terminate automatically without notice if you fail to comply with any term(s) of this Agreement. Upon termination, you shall cease all use of the App and destroy all copies of the App. The Company reserves the right to suspend or terminate your account and access to the App for violations of these Terms.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">7. Disclaimer of Warranties</h2>
            <p className="text-sm sm:text-base text-gray-600">
              THE APP IS PROVIDED &quot;AS IS&quot; AND WITH ALL FAULTS AND DEFECTS WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, THE COMPANY EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, WITH RESPECT TO THE APP, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">8. Limitation of Liability</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-2">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL THE COMPANY HAVE ANY LIABILITY ARISING FROM OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP FOR:
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
              <li>PERSONAL INJURY, PROPERTY DAMAGE, LOST PROFITS, COST OF SUBSTITUTE GOODS OR SERVICES, LOSS OF DATA, OR ANY OTHER CONSEQUENTIAL, INCIDENTAL, INDIRECT, EXEMPLARY, SPECIAL, OR PUNITIVE DAMAGES.</li>
              <li>DIRECT DAMAGES IN AMOUNTS THAT IN THE AGGREGATE EXCEED THE AMOUNT ACTUALLY PAID BY YOU FOR THE APP.</li>
              <li>INJURIES OR HEALTH CONSEQUENCES RESULTING FROM YOUR USE OF OR RELIANCE ON THE APP FOR FITNESS OR EXERCISE PURPOSES.</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">9. Indemnification</h2>
            <p className="text-sm sm:text-base text-gray-600">
              You agree to indemnify, defend, and hold harmless the Company, its affiliates, officers, directors, employees, and agents from and against any and all claims, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or related to your use of the App or violation of these Terms.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">10. Governing Law</h2>
            <p className="text-sm sm:text-base text-gray-600">
              This Agreement is governed by and construed in accordance with the laws of the Kingdom of Thailand, without giving effect to any choice or conflict of law provision or rule.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">11. Contact Information</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              If you have any questions about this Agreement, please contact us at:
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              📧 <a href="mailto:fifteenfit.s@outlook.com" className="text-blue-600 hover:underline">fifteenfit.s@outlook.com</a>
            </p>
            <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4">
              Gobek Labs Co., Ltd.
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
