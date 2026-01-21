import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";

export default function Attributions() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-4 py-4 lg:py-10">
      {/* Top Navigation */}
      <TopNav />
      
      <div className="relative w-full max-w-4xl mb-8 mt-6 lg:mt-18">
        <div className="absolute -right-1 -bottom-1 w-full h-full bg-gray-700"></div>
        <div className="relative bg-white backdrop-blur-sm p-4 sm:p-6 lg:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#003996]">Attributions</h1>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">Open Source Libraries</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Fifteenfit is built with modern open-source technologies. We are grateful to the developers and communities who made these tools available.
            </p>

            <p className="text-sm sm:text-base text-black font-semibold mb-2 mt-4">Key Technologies</p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
              <li><strong>React & React Native</strong>: For building responsive and interactive user interfaces.</li>
              <li><strong>Next.js</strong>: For server-side rendering and optimal performance.</li>
              <li><strong>Firebase</strong>: For authentication, analytics, and cloud infrastructure.</li>
              <li><strong>Tailwind CSS</strong>: For rapid and efficient UI styling.</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">Graphics and Design</h2>
            <p className="text-sm sm:text-base text-gray-600">
              The visual design of Fifteenfit combines custom artwork with carefully selected design resources. We appreciate all contributors who made their work available for use in our application.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">The Fifteenfit Team</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Fifteenfit is developed with passion by Gobek Labs Co., Ltd.
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              Our mission is to revolutionize fitness by making exercise accessible, engaging, and rewarding. We believe that fitness should be fun and achievable for everyone, helping you transform your body in just 15 minutes a day.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">Special Thanks</h2>
            <p className="text-sm sm:text-base text-gray-600">
              We extend our gratitude to all beta testers, fitness enthusiasts, and users who helped shape Fifteenfit into what it is today. Your feedback and enthusiasm drive our continued development and improvement.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#003996]">Contact</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              For any questions or concerns regarding attributions, partnerships, or music licensing, please reach out to us:
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              📧 <a href="mailto:fifteenfit.s@outlook.com" className="text-blue-600 hover:underline">fifteenfit.s@outlook.com</a>
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
