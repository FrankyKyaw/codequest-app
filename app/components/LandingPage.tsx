"use client"
import { useRouter } from "next/navigation";
import React from "react";

const LandingPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  }
  return (
    <>
      <title>CodeQuest - Learn how to code with Real-Time feedback</title>
      <section className="flex items-center justify-center min-h-screen p-10 bg-gray-100">
        <div className="max-w-lg text-center">
          <h1 className="text-5xl font-bold">
            Master Coding with Real-Time Feedback
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Interactive lessons, live coding challenges, and AI-powered
            feedback.
          </p>
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded" onClick={handleClick}>
            Get Started
          </button>
        </div>
      </section>
      <section id="features" className="py-16">
        <h2 className="text-3xl font-bold text-center">
          Why Choose CodeQuest?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-semibold">Interactive Coding</h3>
            <p className="text-gray-600 mt-2">
              Code directly in your browser with real-time feedback.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">AI-Powered Feedback</h3>
            <p className="text-gray-600 mt-2">
              Get instant feedback on your code with AI.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">Gamified Learning</h3>
            <p className="text-gray-600 mt-2">
              Earn badges and points as you learn.
            </p>
          </div>
        </div>
      </section>
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">About CodeQuest</h2>
          <p className="text-lg text-gray-700 mt-4">
            CodeQuest is dedicated to helping beginners learn to code through
            interactive challenges, real-time feedback, and engaging, gamified
            experiences. Our mission is to make coding accessible and fun for
            everyone.
          </p>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
