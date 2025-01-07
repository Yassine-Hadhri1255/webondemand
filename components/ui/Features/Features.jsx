import { useEffect, useState } from 'react';
import SectionWrapper from '../../SectionWrapper'; // Make sure you import your SectionWrapper component
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 9H17M7 13H17M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
            stroke="#008000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Innovation",
      desc: "Nous intégrons les dernières technologies pour vous offrir un site web performant, adapté aux besoins actuels et futurs.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 13.3636L8.03559 16.3204C8.42388 16.6986 9.04279 16.6986 9.43108 16.3204L19 7"
            stroke="#008000"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Transparence",
      desc: "Une communication claire et ouverte à chaque étape du projet, pour une collaboration solide et basée sur la confiance.",
    },
    {
      icon: (
        <svg
          fill="#008000"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17,10.82l-3.09,1.644L15.09,17,12,14.13,8.91,17l1.18-4.536L7,10.82l3.82-.188L12,7l1.18,3.632ZM13,4V2a1,1,0,0,0-2,0V4a1,1,0,0,0,2,0ZM11,20v2a1,1,0,0,0,2,0V20a1,1,0,0,0-2,0ZM19.778,4.222a1,1,0,0,0-1.414,0L16.95,5.636A1,1,0,1,0,18.364,7.05l1.414-1.414A1,1,0,0,0,19.778,4.222ZM4.222,19.778a1,1,0,0,0,1.414,0L7.05,18.364A1,1,0,0,0,5.636,16.95L4.222,18.364A1,1,0,0,0,4.222,19.778Z"
          />
        </svg>
      ),
      title: "Excellence",
      desc: "Nous visons à dépasser vos attentes en fournissant un travail de qualité exceptionnelle à chaque étape du projet.",
    },
  ];
  

  return (
    <SectionWrapper id="features" className="dark:my-0 bg-gray-50 dark:bg-gray-900 sm:my-16">
      <div className="custom-screen text-gray-600 dark:text-gray-300">
        <div className="max-w-7xl mx-auto px-8 py-10">
          <h2 className="text-gray-800 dark:text-gray-50 text-3xl font-semibold sm:text-4xl mb-6">
            Les piliers de notre engagement
          </h2>

          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="flex gap-x-6 items-start group transition-transform transform hover:scale-105"
                >
                  <div
                    style={{ color: 'green' }}
                    className="flex-none w-16 h-16 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center shadow-md group-hover:bg-green-600 group-hover:text-white transition-colors duration-300"
                  >
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl text-gray-800 dark:text-gray-100 font-semibold mb-2">
                      {item.title}
                    </h3>
                    <div className="text-gray-600 dark:text-gray-300">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Features;
