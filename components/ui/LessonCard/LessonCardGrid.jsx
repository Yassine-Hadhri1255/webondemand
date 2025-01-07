import { Duration, Title, SubTitle } from "./";

export const LessonCardGrid = ({ item: { thumbnail, title, description,duration } }) => {

  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg transition-all hover:shadow-xl"
      style={{ height: "450px" }}
    >
      {/* Thumbnail Section */}
      <div className="flex justify-center mb-4">
        <img
          src={thumbnail}
          
          className="rounded-lg w-full"
          style={{ height: "200px", width: "350px" }}
        />
      </div>

      {/* Title Section */}
      <h3 className="text-xl text-gray-800 dark:text-gray-100 font-semibold text-center">
       {duration}
      </h3>

      {/* Description Section */}
      <p className="mt-3 text-gray-600 dark:text-gray-400 text-center">
        {description}
      </p>
    </div>
  );
};
