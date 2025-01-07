import Link from "next/link";
import SectionWrapper from "../../SectionWrapper";
import { LessonCardGrid } from "../LessonCard";
import lessonsExamples from "../../../lessonExamples/lessons.json";

const Course = () => {
  return (
<SectionWrapper>
  <div
    id="services"
    className="custom-screen text-gray-600 dark:text-gray-300"
    aria-labelledby="services-header"
  >
    {/* Header Section */}
    <div className="text-center px-4 py-10">
      <div
        id="services-header"
        className="font-extrabold text-2xl sm:text-3xl text-green-600 uppercase tracking-wide"
      >
        NOS SERVICES
      </div>
      <h2 className="text-gray-800 dark:text-gray-50 text-2xl sm:text-3xl font-extrabold mt-4">
        Des solutions digitales sur mesure <br />
        pour faire évoluer votre entreprise
      </h2>
    </div>

    {/* Lesson Grid Section */}
    <div>
      <ul
        className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
        aria-label="Liste des services disponibles"
      >
        {lessonsExamples && lessonsExamples.length > 0 &&
          lessonsExamples.map(({ id, title, ...item }) => (
            <li
              key={id} // Use id to ensure uniqueness
              className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:border-green-500 hover:border-2 rounded-lg"
              role="listitem" // Added explicit role for better accessibility
              aria-labelledby={`lesson-${id}`}
            >
              <LessonCardGrid
                item={item}
                aria-labelledby={`lesson-${id}`}
              />
            </li>
          ))}
      </ul>
    </div>
  </div>
</SectionWrapper>

  );
};

export default Course;
