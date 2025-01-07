import Link from "next/link";
import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";
import Button from "../Button";
import GradientWrapper from "../../GradientWrapper"
const CTA = () => {
  // Inline Styles
  const styles = {
   
    textBlock: {
      flex: 1,
      marginRight: "20px", // Space between image and text on large screens
      maxWidth: "600px", // Limit the width of the text block
      marginBottom: "20px", // Spacing for vertical stacking on mobile
    },
    title: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#333",
      lineHeight: "1.4",
    },
    description: {
      fontSize: "18px",
      lineHeight: "1.8",
      color: "#555",
    },
    imageBlock: {
      flex: 1,
      textAlign: "center",
      marginBottom: "20px", // Add spacing between image and text when stacked
    },
    image: {
      borderRadius: "10px", // Optional styling
      filter: "grayscale(100%)",
      opacity: "0.8",
      transition: "all 0.3s ease-in-out",
    },
    imageHover: {
      filter: "grayscale(0%)",
      opacity: "1",
      transform: "scale(1.05)",
    },
    // Media Queries for responsiveness
    "@media (max-width: 768px)": {
      container: {
        flexDirection: "column", // Stack items vertically (image on top, text below)
        textAlign: "center", // Center-align text for mobile
        padding: "30px", // Add some padding for smaller screens
      },
      imageBlock: {
        marginBottom: "20px", // Add spacing between image and text
      },
      textBlock: {
        marginRight: "0", // Remove right margin for text block on mobile
        paddingBottom: "20px", // Add bottom padding for better spacing
      },
    },
  };

  return (
 

   
    <GradientWrapper id="cta">
            <div className="custom-screen gap-12 justify-between md:flex">
                <div className='relative max-w-2xl text-gray-300'>
                    <h2 className='text-gray-50 text-3xl font-extrabold  sm:text-4xl' >
                    Votre croissance digitale, notre expertise: une collaboration pour
                    réussir

                    </h2>
                    <p className='mt-3 max-w-xl'>
                    Nous créons des solutions digitales sur mesure pour répondre aux
                    besoins uniques de chaque client. Que vous souhaitiez un design
                    percutant, un site performant, ou une stratégie de marketing digital
                    efficace, notre équipe est là pour vous accompagner vers le succès.

                    </p>
                </div>
                <div className="mt-12 bg-white dark:bg-gray-900/50 rounded-xl shadow-lg md:mt-0">
                <Image
                src="/im-so-glad-i-found-you-shot-of-two-coworkers-talking-while-using-a-digital-tablet-.jpg" // Replace with your image path
                alt="Digital Growth"
                width={650} // Customize width
                height={400} // Customize height
                style={styles.image}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = styles.imageHover.filter;
                  e.currentTarget.style.opacity = styles.imageHover.opacity;
                  e.currentTarget.style.transform = styles.imageHover.transform;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = styles.image.filter;
                  e.currentTarget.style.opacity = styles.image.opacity;
                  e.currentTarget.style.transform = "scale(1)"; // Reset zoom
                }}
          />

                </div>
            </div>

    </GradientWrapper>

   
  );
};

export default CTA;
