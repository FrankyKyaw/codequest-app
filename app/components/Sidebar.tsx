import { useRouter } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
    const router = useRouter();

    const navigateToLesson = (lesson: string) => {
        router.push(`/courses/intro-to-python/${lesson}`);
    }
  return (
    <div className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Course Outline</h2>
        <ul>
        <li className="mb-2">
          <button onClick={() => navigateToLesson('introduction-to-python')}>
            1. Introduction to Python
          </button>
        </li>
        <li className="mb-2">
          <button onClick={() => navigateToLesson('variables-and-data-types')}>
            2. Variables and Data Types
          </button>
        </li>
        <li className="mb-2">
          <button onClick={() => navigateToLesson('control-structures')}>
            3. Control Structures
          </button>
        </li>
        {/* Add more course topics */}
      </ul>
    </div>
  )
}

export default Sidebar