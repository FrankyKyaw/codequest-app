import { NextRequest, NextResponse } from "next/server";

function stripCode(code: string) {
    return code
    .split('\n')
    .filter(line => line.trim() !== '' && !line.trim().startsWith('//'))
    .join('\n')
}
export async function POST(request: NextRequest) {
  try {
    const { code, exercise } = await request.json();
    const strippedCode = stripCode(code);
    const isCorrect = strippedCode === exercise.solution;

    return NextResponse.json({ 
        message: isCorrect ? "Correct! Great job!" : "Not quite right. Try again!",
        isCorrect 
      });
  } catch (error) {
    console.error("Error in code assist:", error);
    return NextResponse.json(
      { error: "Failed to check exercise" },
      { status: 500 }
    );
  }
}
