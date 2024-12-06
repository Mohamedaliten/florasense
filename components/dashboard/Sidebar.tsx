'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // For replacing `useLocation`
import { 
  Leaf, 
  LayoutDashboard, 
  LineChart, 
  Settings 
} from 'lucide-react';

export const Sidebar = () => {
  const pathname = usePathname(); // Get the current path

  const isActive = (path: string) => pathname === path;

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-green-600" />
          <span className="text-xl font-bold text-gray-800">PlantGuard</span>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className={`flex items-center space-x-3 p-3 rounded-lg ${
                isActive('/dashboard')
                  ? 'bg-green-50 text-green-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/analytics"
              className={`flex items-center space-x-3 p-3 rounded-lg ${
                isActive('/analytics')
                  ? 'bg-green-50 text-green-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <LineChart className="h-5 w-5" />
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link
              href="/setttings"
              className={`flex items-center space-x-3 p-3 rounded-lg ${
                isActive('/setttings')
                  ? 'bg-green-50 text-green-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
