"use client"
import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {
    const router = useRouter();

    const navigateToCourse = (course: string) => {
        router.push(`/courses/${course}`);
    }
  return (
    <div>
      <main className="h-screen p-8">
        <section className="mb-8">
          <h1 className="text-3xl font-bold">Welcome back, [User Name]!</h1>
          <p className="mt-2 text-gray-600">
            Continue your coding journey or explore new topics.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Continue Learning</h2>
          <div className="p-4 bg-white shadow-md rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">[Course Title]</h3>
              <p className="text-gray-600 mt-2">[Brief course description]</p>
              <div className="mt-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: "50%" }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">50% Complete</p>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded">
              Resume
            </button>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Explore Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">Intro to Python</h3>
              <p className="text-gray-600 mt-2">Learn the basics of Python programming.</p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => navigateToCourse('intro-to-python')}
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
          <p className="text-sm text-gray-400 mt-2">
            Need help?{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
