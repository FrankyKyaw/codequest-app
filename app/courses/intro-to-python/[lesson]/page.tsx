"use client"
import LessonContent from '@/app/components/LessonContent';
import Sidebar from '@/app/components/Sidebar';
import TopBar from '@/app/components/TopBar';
import React from 'react';

const page = ({ params }: { params: { lesson: string}}) => {
    const { lesson } = params;

  return (
    <div className='flex h-screen'>
        <Sidebar/>
        <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <TopBar/>

        <LessonContent lesson={lesson} />
        {/* AI Chatbot */}
        <div className="h-64 bg-gray-100 p-4">
          <h3 className="text-lg font-bold mb-2">AI Assistant</h3>
          <div className="bg-white h-40 overflow-y-auto mb-2 p-2 rounded">
            {/* Chat messages would go here */}
          </div>
          <input
            type="text"
            placeholder="Ask a question..."
            className="w-full p-2 rounded"
          />
        </div>
    </div>
    </div>
  )
}

export default page;