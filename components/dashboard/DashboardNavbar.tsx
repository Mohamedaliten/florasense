"use client";

import { useState } from "react";
import { Bell, User } from "lucide-react";
import Link from "next/link";

export const DashboardNavbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const username = "John Doe";

  return (
    <nav className="bg-white shadow-lg px-4 py-2">
      <div className="flex justify-between items-center">
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Bell className="h-6 w-6 text-gray-600" />
          </button>

          {showNotifications && (
            <div className="absolute top-12 left-0 w-80 bg-white rounded-lg shadow-lg p-4 z-50">
              <h3 className="font-semibold mb-2">Notifications</h3>
              <div className="space-y-2">
                <div className="p-2 hover:bg-gray-50 rounded">
                  <p className="text-sm">Water level is low</p>
                  <span className="text-xs text-gray-500">2 minutes ago</span>
                </div>
                <div className="p-2 hover:bg-gray-50 rounded">
                  <p className="text-sm">Temperature above threshold</p>
                  <span className="text-xs text-gray-500">5 minutes ago</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg"
          >
            <span className="text-gray-700">{username}</span>
            <User className="h-8 w-8 text-gray-600" />
          </button>

          {showProfile && (
            <div className="absolute top-12 right-0 w-48 bg-white rounded-lg shadow-lg p-2 z-50">
              <Link
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
              >
                Profile
              </Link>
              <Link
                href="/setttings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
              >
                Settings
              </Link>
              <hr className="my-2" />
              <Link
               href="#"
               className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 rounded">
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
