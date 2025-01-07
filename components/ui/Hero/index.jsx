import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import GradientWrapper from "../../GradientWrapper";
import HeroIntroVideo from "../HeroIntroVideo";
import heroThumbnail from "../../../public/hero-thumbnail.png";

const Hero = () => {
  const [isVideoPoppedUp, setVideoPopUp] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure actions like pop-ups or animations run only on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <GradientWrapper>
      <div className="custom-screen flex flex-col-reverse items-center gap-12 text-gray-300 sm:justify-center sm:text-center xl:flex-row xl:text-left">
        {/* Text Content */}
        <div className="flex-none space-y-6 max-w-4xl xl:max-w-2xl">
          <h1 className="text-4xl font-extrabold sm:text-5xl text-white leading-tight">
            Développez votre entreprise avec un site web professionnel
          </h1>
          <div className="text-lg sm:text-xl max-w-xl sm:mx-auto xl:mx-0 text-gray-400">
            Propulsez votre activité grâce à une présence en ligne conçue pour inspirer confiance à vos clients et renforcer durablement l'image professionnelle de votre entreprise.
          </div>
          <div className="flex flex-wrap gap-4 mt-6 sm:justify-center xl:justify-start">
            <Link
              href="#offre"
              className="px-6 py-3 bg-green-500 text-white font-bold text-lg rounded-lg shadow-md hover:bg-green-600"
              aria-label="Go to offer section"
            >
              C'est Parti
            </Link>
            <Link
              href="#services"
              className="px-6 py-3 text-green-500 border-2 border-green-500 font-bold text-lg rounded-lg shadow-md hover:bg-green-500 hover:text-white hover:border-transparent"
              aria-label="Learn more about services"
            >
              En Savoir Plus
            </Link>
          </div>
        </div>

        {/* Image/Video Section */}
        <div className="flex-1 w-full sm:max-w-2xl xl:max-w-xl relative">
          <div className="relative group">
            <Image
              src={heroThumbnail}
              alt="IO Academy - Hero Thumbnail"
              className="rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
              priority
            />
            {/* Optional Badge */}
            <div className="absolute top-4 left-4 bg-green-500 text-black font-semibold px-4 py-2 rounded-lg shadow-lg">
              Offrez-vous un site web!
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup */}
      {isClient && isVideoPoppedUp && (
        <Suspense fallback={<div>Loading Video...</div>}>
          <HeroIntroVideo onClose={() => setVideoPopUp(false)} />
        </Suspense>
      )}
    </GradientWrapper>
  );
};

export default Hero;
