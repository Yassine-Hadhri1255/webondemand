import Link from "next/link";
import GradientWrapper from "../../GradientWrapper";
import Image from "next/image";

const Pricing = () => {
  return (
    <GradientWrapper className="overflow-hidden dark:overflow-visible dark:my-0 sm:my-16">
      <div
        id="pricing"
        className="custom-screen gap-12 justify-between md:flex items-center px-6 py-12 bg-gray-900 rounded-xl"
      >
        {/* Left Text Content */}
        <div className="relative max-w-2xl text-gray-300 space-y-6">
          <h2 className="text-white text-3xl font-semibold sm:text-4xl">
            Votre croissance digitale, notre expertise: une collaboration pour réussir
          </h2>
          <div className="mt-3 max-w-xl text-gray-200">
            Nous créons des solutions digitales sur mesure pour répondre aux besoins uniques de chaque client. Que vous
            souhaitiez un design percutant, un site performant, ou une stratégie de marketing digital efficace, notre équipe
            est là pour vous accompagner vers le succès.
          </div>
          {/* Call to Action Button */}
          <div className="mt-6">
            <Link
              href="#offre"
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
            >
              Découvrez nos services
            </Link>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="mt-5 md:mt-0 bg-white dark:bg-gray-800/70 rounded-xl shadow-lg">
          <Image
            src="/im-so-glad-i-found-you-shot-of-two-coworkers-talking-while-using-a-digital-tablet-.jpg" // Replace with your image path
            alt="Deux collègues discutant de stratégie digitale"
            width={450}
            height={300}
            className="rounded-xl grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </GradientWrapper>
  );
};

export default Pricing;
