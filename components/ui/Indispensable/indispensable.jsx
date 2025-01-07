import React from 'react';
import SectionWrapper from "../../SectionWrapper";

function Indispensable() {
    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9H17M7 13H17M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z" 
                    stroke="#008000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Augmentez votre crédibilité",
            desc: "Un site internet bien conçu reflète le sérieux et la qualité de votre entreprise. Il rassure vos prospects et positionne votre marque comme fiable et professionnelle."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                    <path d="M9.00033 22H10.0003V20H9.01133C8.70333 19.994 6.00033 19.827 6.00033 16C6.00033 14.007 5.33533 12.754 4.49833 12C5.33533 11.246 6.00033 9.993 6.00033 8C6.00033 4.173 8.70333 4.006 9.00033 4H10.0003V2H8.99833C7.26933 2.004 4.00033 3.264 4.00033 8C4.00033 10.8 2.32233 10.99 1.98633 11L2.00033 13C2.08233 13 4.00033 13.034 4.00033 16C4.00033 20.736 7.26933 21.996 9.00033 22ZM22.0003 11C21.9183 11 20.0003 10.966 20.0003 8C20.0003 3.264 16.7313 2.004 15.0003 2H14.0003V4H14.9893C15.2973 4.006 18.0003 4.173 18.0003 8C18.0003 9.993 18.6653 11.246 19.5023 12C18.6653 12.754 18.0003 14.007 18.0003 16C18.0003 19.827 15.2973 19.994 15.0003 20H14.0003V22H15.0023C16.7313 21.996 20.0003 20.736 20.0003 16C20.0003 13.2 21.6783 13.01 22.0143 13L22.0003 11Z" 
                    fill="currentColor" />
                </svg>
            ),
            title: "Attirez plus de clients",
            desc: "Un site optimisé pour votre audience transforme vos visiteurs en clients fidèles, en mettant en avant vos services et en facilitant la prise de contact."
        },
        {
            icon: (
                <svg fill="#008000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17,10.82l-3.09,1.644L15.09,17,12,14.13,8.91,17l1.18-4.536L7,10.82l3.82-.188L12,7l1.18,3.632ZM13,4V2a1,1,0,0,0-2,0V4a1,1,0,0,0,2,0ZM11,20v2a1,1,0,0,0,2,0V20a1,1,0,0,0-2,0ZM19.778,4.222a1,1,0,0,0-1.414,0L16.95,5.636A1,1,0,1,0,18.364,7.05l1.414-1.414A1,1,0,0,0,19.778,4.222ZM4.222,19.778a1,1,0,0,0,1.414,0L7.05,18.364A1,1,0,0,0,5.636,16.95L4.222,18.364A1,1,0,0,0,4.222,19.778ZM22,11H20a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2ZM2,13H4a1,1,0,0,0,0-2H2a1,1,0,0,0,0,2Zm16.364,6.778a1,1,0,0,0,1.414-1.414L18.364,16.95a1,1,0,0,0-1.414,1.414ZM7.05,7.05a1,1,0,0,0,0-1.414L5.636,4.222A1,1,0,0,0,4.222,5.636L5.636,7.05a1,1,0,0,0,1.414,0Z" />
                </svg>
            ),
            title: "Disponible 24/7",
            desc: "Votre site reste opérationnel en permanence, permettant à vos clients de découvrir vos offres et de vous contacter, même en dehors de vos horaires d’ouverture."
        },
        {
            icon: (
                <svg fill="#008000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17,10.82l-3.09,1.644L15.09,17,12,14.13,8.91,17l1.18-4.536L7,10.82l3.82-.188L12,7l1.18,3.632ZM13,4V2a1,1,0,0,0-2,0V4a1,1,0,0,0,2,0ZM11,20v2a1,1,0,0,0,2,0V20a1,1,0,0,0-2,0ZM19.778,4.222a1,1,0,0,0-1.414,0L16.95,5.636A1,1,0,1,0,18.364,7.05l1.414-1.414A1,1,0,0,0,19.778,4.222ZM4.222,19.778a1,1,0,0,0,1.414,0L7.05,18.364A1,1,0,0,0,5.636,16.95L4.222,18.364A1,1,0,0,0,4.222,19.778ZM22,11H20a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2ZM2,13H4a1,1,0,0,0,0-2H2a1,1,0,0,0,0,2Zm16.364,6.778a1,1,0,0,0,1.414-1.414L18.364,16.95a1,1,0,0,0-1.414,1.414ZM7.05,7.05a1,1,0,0,0,0-1.414L5.636,4.222A1,1,0,0,0,4.222,5.636L5.636,7.05a1,1,0,0,0,1.414,0Z" />
                </svg>
            ),
            title: "Améliorez votre visibilité",
            desc: "Grâce au référencement naturel (SEO), votre site vous rend visible auprès de nouveaux clients qui recherchent activement vos produits ou services."
        },
        {
            icon: (
                <svg fill="#008000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17,10.82l-3.09,1.644L15.09,17,12,14.13,8.91,17l1.18-4.536L7,10.82l3.82-.188L12,7l1.18,3.632ZM13,4V2a1,1,0,0,0-2,0V4a1,1,0,0,0,2,0ZM11,20v2a1,1,0,0,0,2,0V20a1,1,0,0,0-2,0ZM19.778,4.222a1,1,0,0,0-1.414,0L16.95,5.636A1,1,0,1,0,18.364,7.05l1.414-1.414A1,1,0,0,0,19.778,4.222ZM4.222,19.778a1,1,0,0,0,1.414,0L7.05,18.364A1,1,0,0,0,5.636,16.95L4.222,18.364A1,1,0,0,0,4.222,19.778ZM22,11H20a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2ZM2,13H4a1,1,0,0,0,0-2H2a1,1,0,0,0,0,2Zm16.364,6.778a1,1,0,0,0,1.414-1.414L18.364,16.95a1,1,0,0,0-1.414,1.414ZM7.05,7.05a1,1,0,0,0,0-1.414L5.636,4.222A1,1,0,0,0,4.222,5.636L5.636,7.05a1,1,0,0,0,1.414,0Z" />
                </svg>
            ),
            title: "Restez compétitif",
            desc: "Avoir un site moderne montre que votre entreprise est innovante et à la hauteur des attentes digitales de vos clients, vous aidant à surpasser vos concurrents."
        },
        {
            icon: (
                <svg fill="#008000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17,10.82l-3.09,1.644L15.09,17,12,14.13,8.91,17l1.18-4.536L7,10.82l3.82-.188L12,7l1.18,3.632ZM13,4V2a1,1,0,0,0-2,0V4a1,1,0,0,0,2,0ZM11,20v2a1,1,0,0,0,2,0V20a1,1,0,0,0-2,0ZM19.778,4.222a1,1,0,0,0-1.414,0L16.95,5.636A1,1,0,1,0,18.364,7.05l1.414-1.414A1,1,0,0,0,19.778,4.222ZM4.222,19.778a1,1,0,0,0,1.414,0L7.05,18.364A1,1,0,0,0,5.636,16.95L4.222,18.364A1,1,0,0,0,4.222,19.778ZM22,11H20a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2ZM2,13H4a1,1,0,0,0,0-2H2a1,1,0,0,0,0,2Zm16.364,6.778a1,1,0,0,0,1.414-1.414L18.364,16.95a1,1,0,0,0-1.414,1.414ZM7.05,7.05a1,1,0,0,0,0-1.414L5.636,4.222A1,1,0,0,0,4.222,5.636L5.636,7.05a1,1,0,0,0,1.414,0Z" />
                </svg>
            ),
            title: "Suivez vos performances",
            desc: "vec des outils d’analyse intégrés, mesurez l’impact de votre site, comprenez le comportement de vos visiteurs et améliorez vos stratégies marketing."
        }
    ];

    return (
      
        <SectionWrapper id="features" className="dark:my-0 bg-gray-50 dark:bg-gray-900 sm:my-16">
            <div className="custom-screen text-gray-600 dark:text-gray-300 py-10">
                <center>
                    <div className="max-w-5xl px-6 py-10">
                        <h5 className="text-green-600 dark:text-green-400 text-xl font-extrabold uppercase tracking-wide mb-2">
                            SITE INTERNET
                        </h5>
                        <h2 className="dark:text-gray-50 text-3xl sm:text-4xl font-extrabold leading-snug">
                            Pourquoi un site professionnel est indispensable pour votre entreprise ?
                        </h2>
                        <h4 className="text-gray-600 dark:text-gray-300 mt-6 text-lg font-medium italic" style={{ color: "#808080" }}>
                            "87 % des consommateurs vérifient en ligne avant de choisir une entreprise."
                        </h4>
                    </div>
                </center>

                <div className="mt-12">
                    <ul className="grid gap-y-12 gap-x-12 sm:grid-cols-2 lg:grid-cols-3 px-4">
                        {features.map((item, idx) => (
                            <li key={idx} className="flex gap-x-4 transform transition-transform duration-300 ease-in-out hover:scale-105">
                                <div className="w-full p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-green-50 hover:border-green-500">
                                    <h3 className="text-xl text-gray-800 dark:text-gray-100 font-semibold">
                                        {item.title}
                                    </h3>
                                    <div className="mt-4 text-gray-700 dark:text-gray-300">{item.desc}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default Indispensable;
