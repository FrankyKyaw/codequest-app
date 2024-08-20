"use client";
import LessonContent from "@/app/components/LessonContent";
import Sidebar from "@/app/components/Sidebar";
import TopBar from "@/app/components/TopBar";
import { getLessonsById, Lesson } from "@/app/data/LessonData";
import React, { useEffect, useState } from "react";

const page = ({ params }: { params: { lesson: string } }) => {
  const [lessonData, setLessonData] = useState<Lesson | null>(null);
  const { lesson } = params;

  useEffect(() => {
    const lesson = getLessonsById(params.lesson);
    if (lesson) {
      setLessonData(lesson);
    } else {
      console.log(`Lesson not found: ${params.lesson}`);
    }
  }, [params.lesson]);

  if (!lessonData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <LessonContent lesson={lessonData} />
      </div>
    </div>
  );
};

export default page;
