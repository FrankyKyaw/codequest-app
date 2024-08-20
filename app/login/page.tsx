"use client"
import React from "react";
import { createClient } from "../utils/supabase/client";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `http://localhost:3000/courses`,
      },
    });

    if (error) {
      console.error("Error logging in:", error.message);
    } else {
      console.log("Redirecting to Google login...");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Login to Your Account</h1>
      <button
        onClick={handleGoogleLogin}
        className="bg-blue-500 text-white px-6 py-3 rounded shadow"
      >
        Sign in with Google
      </button>
    </div>
  );
}
