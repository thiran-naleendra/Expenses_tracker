import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react"; // Import NextAuth utilities
import { UserCircle, LogOut } from "lucide-react";

const UserMenu = () => {
  const { data: session } = useSession(); // Access session data
  // const router = useRouter(); // Router for redirection
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      // Sign out using NextAuth
      await signOut({ redirect: false });
      router.push("/login"); // Redirect to sign-in page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <UserCircle className="h-8 w-8" />
        <span className="hidden md:inline">{session?.user?.name || "User"}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          <div className="px-4 py-2 border-b">
            <p className="text-sm font-medium text-gray-900">
              {session?.user?.name || "User"}
            </p>
            <p className="text-sm text-gray-500">
              {session?.user?.email || "No email available"}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center space-x-2"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
