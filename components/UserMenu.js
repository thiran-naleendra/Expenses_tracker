import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import the router
import { UserCircle, LogOut } from "lucide-react";

const UserMenu = () => {
  const [isMounted, setIsMounted] = useState(false); // State to track client-side mounting
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("wgthiran@gmail.com"); // Default email or placeholder
  // const router = useRouter(); // Initialize the router

  // Ensure the component only runs on the client
  useEffect(() => {
    setIsMounted(true); // Component is mounted on the client

    // Fetch the user's email (e.g., from localStorage, API, or context)
    const storedEmail = localStorage.getItem("userEmail"); // Example: retrieve from localStorage
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleLogout = async () => {
    try {
      // Clear any client-side authentication data
      localStorage.removeItem("authToken"); // Example
      localStorage.removeItem("userEmail"); // Clear email
      sessionStorage.clear();

      // Redirect to the login page or home page
      if (isMounted) {
        router.push("/login"); // Redirect using Next.js router
      }
    } catch (error) {
      console.error("Logout failed:", error);
      // Optionally, handle the error (e.g., show a notification)
    }
  };

  // Render only on the client side
  if (!isMounted) return null;

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <UserCircle className="h-8 w-8" />
        <span className="hidden md:inline">Thiran Naleendra</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          <div className="px-4 py-2 border-b">
            <p className="text-sm font-medium text-gray-900">Thiran</p>
            <p className="text-sm text-gray-500">{email}</p>
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
