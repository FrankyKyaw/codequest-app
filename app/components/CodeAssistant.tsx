import React, { useState } from 'react'

interface CodeAssistantProps {
    code: string;
}
const CodeAssistant:React.FC<CodeAssistantProps> = ({ code }) => {
    const [assistantResponse, setAssistantResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const getHelp = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/code-assist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ code }),
            })
            
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
    }
  return (
    <div>
        <h3>Code Assistant</h3>
        <button onClick={getHelp}> {isLoading ? "Analyzing..." : "Get Help"}</button>
    </div>
  )
}

export default CodeAssistant