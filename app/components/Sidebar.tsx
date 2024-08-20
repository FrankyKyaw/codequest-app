import { useRouter } from "next/navigation";
import React from "react";
import { lessons } from "../data/LessonData";

const Sidebar = () => {
  const router = useRouter();

  const navigateToLesson = (lessonId: string) => {
    router.push(`/courses/intro-to-javascript/${lessonId}`);
  };
  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Course Outline</h2>
      <ul>
        {lessons.map((lesson, index) => (
          <li key={lesson.id} className="mb-2">
            <button
              className="text-left w-full"
              onClick={() => navigateToLesson(lesson.id)}
            >
              {index+1}. {lesson.title}
            </button>
          </li>
        ))}
        {/* Add more course topics */}
      </ul>
    </div>
  );
};

export default Sidebar;
