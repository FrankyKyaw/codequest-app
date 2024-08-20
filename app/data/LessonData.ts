export interface Exercise {
  id: string;
  description: string;
  initialCode: string;
  solution: string;
}
export interface Lesson {
  id: string;
  title: string;
  content: string;
  initialCode: string;
  exercises: Exercise[];
}

export const lessons: Lesson[] = [
  {
    id: "introduction-to-javascript",
    title: "Introduction to JavaScript",
    content: `
          <h1>Welcome to JavaScript!</h1>
          <p>JavaScript is a versatile programming language that powers the interactive elements of websites...</p>
          <!-- More HTML content here -->
        `,
    initialCode: '// Your first JavaScript code\nconsole.log("Hello, World!");',
    exercises: [
      {
        id: "ex1",
        description:
          'Create a variable named "greeting" and assign it the value "Hello, JavaScript!"',
        initialCode: "// Your code here",
        solution: 'const greeting = "Hello, JavaScript!";',
      },
    ],
  },
  {
    id: "variables-and-data-types",
    title: "Variables and Data Types",
    content: `
          <h1>Variables and Data Types in JavaScript</h1>
          <p>In JavaScript, you can store and manipulate data using variables...</p>
          <!-- More HTML content here -->
        `,
    initialCode:
      'let message = "Welcome to JavaScript!";\nconsole.log(message);',
    exercises: [
      {
        id: "ex1",
        description:
          'Create a variable named "greeting" and assign it the value "Hello, JavaScript!"',
        initialCode: "// Your code here",
        solution: 'const greeting = "Hello, JavaScript!";',
      },
    ],
  },
  // Add more lessons here
];

export function getLessonsById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}
