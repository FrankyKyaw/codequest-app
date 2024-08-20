"use client";
import { useRouter } from "next/navigation";
import React from "react";

const LandingPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };
  return (
    <>
      <title>CodeQuest - Learn how to code</title>
      <div className="min-h-screen flex bg-gray-100 p-10">
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-6">
            Master Coding with CodeQuest
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Start your journey to becoming a coding master with CodeQuest.
          </p>
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded"
            onClick={handleClick}
          >
            Get Started
          </button>
        </div>

        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 ml-10">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose CodeQuest?
          </h2>
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold">Interactive Coding</h3>
              <p className="text-gray-600 mt-2">
                Code directly in your browser.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">AI-Powered Feedback</h3>
              <p className="text-gray-600 mt-2">
                Get instant feedback on your code with AI.
              </p>
            </div>
            <div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">Coding Challenges</h3>
                <p className="text-gray-600 mt-2">
                  Practice your coding skills with challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
