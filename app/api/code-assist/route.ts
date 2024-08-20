import { NextRequest, NextResponse } from "next/server";
import Together from "together-ai";

const SYSTEM_PROMPT = `You are a helpful coding assistant specializing in JavaScript. Your task is to:

1. For general code review:
   - Analyze the provided code.
   - Offer one concise, helpful suggestion for improvement.

2. For exercise evaluation:
   - Ignore the first comment that says /// Your code here.
   - Check if the user's code solves the exercise correctly.
   - If correct, respond with Great work or Congrats you did it! Do not provide anymore hints or suggestions.
   - If incorrect, provide exactly one specific, actionable hint to guide the user towards the solution, without giving away the complete answer.

Always provide only one suggestion or hint, keeping your response concise and focused.`;

const together = new Together({
  apiKey: process.env.TOGETHER_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { code, exercise } = await request.json();
    let prompt = `${SYSTEM_PROMPT}\n\nUser's code:\n${code}\n\n`;

    if (exercise) {
        prompt += `Exercise: ${exercise.description}\n`;
        prompt += `Correct solution (for reference, do not reveal): ${exercise.solution}\n\n`;
        prompt += `Evaluate the code and provide one specific hint if needed:`;
    } else {
        prompt += `Provide suggestions for improving this code:`;
    }

    const response = await together.completions.create({
      model: "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo",
      prompt: prompt,
      temperature: 0.7,
      top_p: 0.7,
      top_k: 50,
      repetition_penalty: 1,
      stop: ["</s>", "User:", "Human:"],
      max_tokens: 500,
      stream: false,
    });

    const suggestion =
      response.choices[0]?.text?.trim() ?? "Unable to generate a hint at this time.";
    return NextResponse.json({ suggestions: suggestion });
  } catch (error) {
    console.error("Error in code assist:", error);
    return NextResponse.json(
      { error: "Failed to get code suggestions" },
      { status: 500 }
    );
  }
}
