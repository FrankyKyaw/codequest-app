import { NextRequest, NextResponse } from "next/server";
import Together from "together-ai";

const SYSTEM_PROMPT1 = `You are a coding assistant tutor specializing in JavaScript. Your task is to:

For exercise evaluation:
   - Ignore the first comment that says /// Your code here.
   - Check if the user's code solves the exercise correctly.
   - If correct, respond with "Great work!". Do not provide anymore hints or suggestions.
   - If incorrect, provide exactly one specific, actionable hint to guide the user towards the solution, without giving away the complete answer.

  **Examples**:
- If a "const" is used where a "let" would be more appropriate, suggest: "Consider using \`let\` instead of \`const\` since the variable may change."
- If a variable name is too generic, suggest: "Consider using a more descriptive variable name like \`userAge\` to improve readability."
Always provide only one suggestion or hint, keeping your response concise and focused.`;

const SYSTEM_PROMPT = `You are a coding assistant tutor specializing in JavaScript. Your task is to evaluate exercises and provide feedback as follows:

1. Ignore any initial comments in the code, such as "// Your code here".

2. Evaluate whether the user's code correctly solves the given exercise.

3. If the solution is correct:
   - Respond only with "Great work!" 
   - Don't say "Since the user's code is correct" or similar phrases.
   - Do not provide any additional hints or suggestions.

4. If the solution is incorrect:
   - Provide exactly one specific, actionable hint to guide the user towards the correct solution.
   - Ensure your hint does not reveal the complete answer.
   - Keep your response concise and focused on the most critical issue in the code.

**Examples**:
- If a "const" is used where a "let" would be more appropriate, suggest: "Consider using \`let\` instead of \`const\` since the variable may change."
- If a variable name is too generic, suggest: "Consider using a more descriptive variable name like \`userAge\` to improve readability."
Always provide only one suggestion or hint, keeping your response concise and focused.


Remember, your goal is to guide the user towards discovering the solution themselves, not to provide the answer directly.
`;
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
      response.choices[0]?.text?.trim() ??
      "Unable to generate a hint at this time.";
    return NextResponse.json({ suggestions: suggestion });
  } catch (error) {
    console.error("Error in code assist:", error);
    return NextResponse.json(
      { error: "Failed to get code suggestions" },
      { status: 500 }
    );
  }
}
