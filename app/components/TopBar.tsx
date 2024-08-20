import { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "../utils/supabase/client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const TopBar = () => {
  const router = useRouter();
  const supabase = createClient();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/login");
    }
  };
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        <Link className="text-2xl font-bold" href="/courses">
          CodeQuest
        </Link>
        <button
          onClick={handleLogout}
          className="ml-2 bg-gray-200 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default TopBar;
