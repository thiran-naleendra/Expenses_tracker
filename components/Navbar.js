import React from 'react'
import { UserCircle, LogOut } from 'lucide-react';
import UserMenu from './UserMenu';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">Your Brand</h1>
          </div>

          {/* Navigation Links */}
          

          {/* User Menu */}
          <UserMenu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar