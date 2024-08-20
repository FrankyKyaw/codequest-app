"use client";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import CodeAssistant from "./CodeAssistant";
import { Exercise, Lesson } from "../data/LessonData";
import { createClient } from "../utils/supabase/client";
import { useRouter } from "next/navigation";

interface LessonContentProps {
  lesson: Lesson;
}

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

const LessonContent: React.FC<LessonContentProps> = ({ lesson }) => {
  const [code, setCode] = useState(lesson.initialCode || "");
  const [output, setOutput] = useState("");
  const [showAssistant, setShowAssistant] = useState(false);
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [submissionResult, setSubmissionResult] = useState<{
    message: string;
    isCorrect: boolean;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const supbase = createClient();
  const outputRef = useRef<string[]>([]);

  const runJavaScript = () => {
    outputRef.current = [];
    const originalLog = console.log;
    console.log = (...args) => {
      outputRef.current.push(args.map((arg) => String(arg)).join(" "));
    };

    try {
      new Function(code)();
      setOutput(outputRef.current.join("\n"));
    } catch (error) {
      setOutput(String(error));
    } finally {
      console.log = originalLog;
    }
  };

  const toggleAssistant = () => {
    setShowAssistant(!showAssistant);
  };

  const startExercise = (exercise: Exercise) => {
    setCurrentExercise(exercise);
    setCode(exercise.initialCode);
  };

  const submitExercise = async () => {
    if (!currentExercise) return;
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const response = await fetch("/api/check-exercise", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, exercise: currentExercise }),
      });
      if (!response.ok) {
        throw new Error("Failed to check exercise");
      }
      const data = await response.json();
      setSubmissionResult({ message: data.message, isCorrect: data.isCorrect });
    } catch (error) {
      console.error("Error checking exercise:", error);
      setSubmissionResult({
        message: "Error checking exercise. Please try again.",
        isCorrect: false,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-1 overflow-y-auto">
      <div className="w-full md:w-1/2 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{lesson.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: lesson.content }} />

        {lesson.exercises.length > 0 && (
          <>
            <h3 className="text-2xl font-bold">Exercises</h3>
            {lesson.exercises.map((exercise, index) => (
              <button
                key={exercise.id}
                onClick={() => startExercise(exercise)}
                className="w-full text-left p-3 mt-2 bg-blue-100 hover:bg-blue-200 rounded"
              >
                {exercise.description}
              </button>
            ))}
          </>
        )}
      </div>

      <div className="w-1/2 bg-gray-800 p-4 text-white">
        <h3 className="text-lg font-bold mb-2">Code Editor</h3>
        <MonacoEditor
          height="300px"
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || "")}
        />
        <div className="flex justify-between items-center mt-2">
          <div className="flex space-x-2">
            <button
              className="mt-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              onClick={runJavaScript}
            >
              Run Code
            </button>
            {currentExercise && (
              <button
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={submitExercise}
              >
                Submit Exercise
              </button>
            )}
          </div>

          <button
            className={`py-2 px-4 rounded ${
              showAssistant
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-500 hover:bg-gray-600"
            }`}
            onClick={toggleAssistant}
          >
            {showAssistant ? "Hide Assistant" : "Show Assistant"}
          </button>
        </div>

        <div className="mt-4 bg-gray-900 p-2 rounded">
          <h4 className="text-sm font-semibold mb-2">Output: </h4>
          <pre className="whitespace-pre-wrap">{output}</pre>
        </div>
        {submissionResult && (
          <div
            className={`mt-4 p-2 rounded ${
              submissionResult.isCorrect ? "bg-green-700" : "bg-red-700"
            }`}
          >
            <h4 className="text-sm font-semibold mb-2">Submission Result: </h4>
            <p>{submissionResult.message}</p>
          </div>
        )}
      </div>
      {showAssistant && (
        <div className="right-0 top-0 h-full w-full bg-gray-700 p-4 shadow-lg overflow-y-auto ">
          <CodeAssistant code={code} exercise={currentExercise} />
        </div>
      )}
    </div>
  );
};

export default LessonContent;
