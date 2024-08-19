import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import CodeAssistant from "./CodeAssistant";

interface LessonContentProps {
  lesson: string;
  initialCode?: string;
}

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});


const LessonContent: React.FC<LessonContentProps> = ({
  lesson,
  initialCode,
}) => {
    const [code, setCode] = useState(initialCode || "");
    const [output, setOutput] = useState("");
    const outputRef = useRef<string[]>([]);

    const runJavaScript = () => {
      outputRef.current = [];
      const originalLog = console.log;
      console.log = (...args) => {
        outputRef.current.push(args.map(arg => String(arg)).join(' '));
      };
  
      try {
        new Function(code)();
        setOutput(outputRef.current.join('\n'));
      } catch (error) {
        setOutput(String(error));
      } finally {
        console.log = originalLog;
      }
    };


  return (
    <div className="flex-1 flex">
      <div className="w-1/2 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">{lesson}</h2>
        <p>Lesson content goes here...</p>
      </div>

      <div className="w-1/2 bg-gray-800 p-4 text-white">
        <h3 className="text-lg font-bold mb-2">Code Editor</h3>
        <MonacoEditor
          height="300px"
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || '')}
        />
        <button className="mt-2 bg-green-500 text-white py-2 px-4  rounded" onClick={runJavaScript}>
          Run Code
        </button>
        <div className="mt-4 bg-gray-900 p-2 rounded">
          <h4 className="text-sm font-semibold mb-2">Output: </h4>
          <pre className="whitespace-pre-wrap">{output}</pre>
        </div>
      </div>
      <CodeAssistant code={code} />
    </div>
  );
};

export default LessonContent;
