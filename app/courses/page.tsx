"use client";
import { useRouter } from "next/navigation";
import React from "react";
import TopBar from "../components/TopBar";

const Dashboard = () => {
  const router = useRouter();

  const navigateToCourse = (course: string) => {
    router.push(`/courses/${course}`);
  };
  return (
    <div>
      <TopBar />
      <main className="h-screen p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Explore Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-slate-500 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">Intro to Javascript</h3>
              <p className="text-gray-600 mt-2">
                Learn the basics of Javascript programming.
              </p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() =>
                  navigateToCourse(
                    "intro-to-javascript/introduction-to-javascript"
                  )
                }
              >
                Start Course
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 CodeQuest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
