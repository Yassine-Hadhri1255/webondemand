import React from "react";
import GradientWrapper from "../../GradientWrapper";
import Link from "next/link";
function OffreSpéciale() {
  return (
    <GradientWrapper className="overflow-hidden dark:overflow-visible dark:my-0 sm:my-16">
      <div
        id="offre"
        className="max-w-lg mx-auto mt-10 bg-black text-white shadow-xl rounded-lg overflow-hidden border border-gray-800 transition-transform transform hover:scale-105 hover:border-green-500 hover:shadow-green-500/50"
        aria-labelledby="offre-title"
        aria-describedby="offre-details"
      >
        {/* Header Section */}
        <div className="p-6 bg-gradient-to-r from-black to-gray-900 text-center">
          <h2
            id="offre-title"
            className="text-2xl font-extrabold mb-3 uppercase tracking-wide"
          >
            Offre Spéciale
          </h2>
          <div
            id="offre-description"
            className="text-lg font-medium mb-4 opacity-80"
          >
            Démarrez 2025 avec un site internet qui vous fait gagner de nouveaux
            clients !
          </div>
          <div
            className="inline-block px-8 py-3 text-3xl font-bold text-black bg-green-500 rounded-md shadow-md"
            aria-label="Prix de l'offre spéciale: 500€"
          >
            500€
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6 bg-gray-900">
          <h3
            className="text-xl font-semibold text-green-500 mb-4 uppercase"
            id="offre-details"
          >
            Inclus :
          </h3>
          <ul
            className="list-disc list-inside text-gray-300 space-y-3"
            aria-label="Détails de l'offre"
          >
            <li>Site internet (4 pages incluses)</li>
            <li>Design professionnel et optimisé pour mobile (responsive)</li>
            <li>Optimisation de base pour le référencement naturel (SEO)</li>
            <li>Nom de domaine inclus pour 1 an</li>
            <li>Hébergement web inclus pour 1 an</li>
            <li>Certificat SSL pour la sécurité</li>
            <li>Formulaire de contact intégré</li>
            <li>1 an de support technique inclus</li>
          </ul>
        </div>

       {/* Footer Section */}
       <div className="p-6 bg-black text-center">
      <Link
        href="https://wa.me/21690177812"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-semibold text-xl rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
        aria-label="Obtenir l'offre via WhatsApp"
        passHref
      >
        Obtenir l'Offre
      </Link>
    </div>
      </div>
    </GradientWrapper>
  );
}

export default OffreSpéciale;
