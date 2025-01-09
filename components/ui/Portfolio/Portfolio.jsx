import React from "react";
import SectionWrapper from "../../SectionWrapper";

// Mock project data - replace or fetch dynamically
const projectData = [
  {
    id: 1,
    image: "/Pixellab-Fitfactory.webp",
    alt: "Salle de sport",
    title: "Salle de sport",
  },
  {
    id: 2,
    image: "/Pixellab-Hanays.webp",
    alt: "Bougies Françaises",
    title: "Bougies Françaises",
  },
  {
    id: 3,
    image: "/Pixellab-Patrice-Hills.webp",
    alt: "Marque de bijoux",
    title: "Marque de bijoux",
  },
  {
    id: 4,
    image: "/Pixellab-Pizza-Paras.webp",
    alt: "Pizzeria",
    title: "Pizzeria",
  },
  {
    id: 5,
    image: "/Pixellab-Portfolio-Inner.webp",
    alt: "Architecte d'intérieur",
    title: "Architecte d'intérieur",
  },
  {
    id: 6,
    image: "/Pixellab-Portfolio-Photographe.webp",
    alt: "Photographe",
    title: "Photographe",
  },
  {
    id: 7,
    image: "/Pixellab-Remedes-Anciens.webp",
    alt: "Boissons naturelles",
    title: "Boissons naturelles",
  },
  {
    id: 8,
    image: "/Pixellab-Restaurant-Portfolio.webp",
    alt: "Restaurant",
    title: "Restaurant",
  },
  {
    id: 9,
    image: "/Pixellab-Spilatech.webp",
    alt: "Studio Pilates",
    title: "Studio Pilates",
  },
];

// Reusable ProjectCard Component
const ProjectCard = ({ image, alt, title }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg" role="region" aria-labelledby={`project-${title}`}>
    <img
      src={image}
      alt={alt}
      loading="lazy"
      className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
      aria-hidden="true" // This ensures the image is ignored by screen readers
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="text-white text-lg font-semibold" id={`project-${title}`}>
        {title}
      </div>
    </div>
  </div>
);

const Portfolio = () => (
  <SectionWrapper>
    <div className="custom-screen text-gray-600 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <h2 className="text-green-600 dark:text-green-400 text-3xl font-semibold sm:text-4xl text-center mb-6">
          Quelques Projets
        </h2>
        <div className="text-center   dark:text-gray-300 mb-12 text-lg text-white">
          Libérer le pouvoir de l'innovation et de la créativité
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.length > 0 ? (
            projectData.map(({ id, image, alt, title }) => (
              <ProjectCard key={id} image={image} alt={alt} title={title} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              Aucun projet disponible pour le moment.
            </div>
          )}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default Portfolio;
