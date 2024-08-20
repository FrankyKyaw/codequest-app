import React, { useState } from "react";
import { Exercise } from "../data/LessonData";

interface CodeAssistantProps {
  code: string;
  exercise: Exercise | null;
}
const CodeAssistant: React.FC<CodeAssistantProps> = ({ code, exercise }) => {
  const [assistantResponse, setAssistantResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getHelp = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch("/api/code-assist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, exercise }),
      });

      if (!response.ok) {
        throw new Error("Failed to get code suggestions");
      }
      const data = await response.json();
      setAssistantResponse(data.suggestions);
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to get code suggestions");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="text-white">
      <h3 className="text-xl font-bold mb-4">Code Assistant</h3>
      <div className="mb-4">
        <p className="text-gray-300">
          Need help with your code? Click the button below, and our AI assistant
          will provide suggestions and guidance.
        </p>
      </div>
      <button
        onClick={getHelp}
        disabled={isLoading}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
      >
        {isLoading ? "Analyzing..." : exercise ? "Check Exercise" : "Select an exercise to get help"}
      </button>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      {assistantResponse && (
        <div className="mt-4 rounded overflow-y-auto max-h-96">
          <h4 className="font-semibold mb-2">Suggestions: </h4>
          <p className="bg-gray-800 p-3 rounded">{assistantResponse}</p>
        </div>
      )}
    </div>
  );
};

export default CodeAssistant;
