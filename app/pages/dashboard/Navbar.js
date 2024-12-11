import React from 'react'
import { UserCircle, LogOut } from 'lucide-react';
import UserMenu from './UserMenu';
import Image from 'next/image';
import { DollarSign, TrendingDown, TrendingUp } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
          <TrendingUp className="h-6 w-6 text-green-700 dark:text-green-300" />
            <h1 className="text-xl font-bold text-gray-800">&ensp;Expense Tracker</h1>
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