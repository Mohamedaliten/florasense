// pages/dashboard.js or pages/dashboard.tsx
"use client";

import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { SensorCard } from "@/components/dashboard/SensorCard";
import { ControlPanel } from "@/components/dashboard/ControlPanel";
import { AlertTriangle } from "lucide-react";

const Dashboard = () => {
  const username = "John";

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardNavbar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
              Welcome back, {username}! 👋
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <SensorCard type="temperature" value={24.5} unit="°C" />
              <SensorCard type="humidity" value={65} unit="%" />
              <SensorCard type="co2" value={420} unit="ppm" />
              <SensorCard type="light" value={850} unit="lux" />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                System Alerts
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <span className="text-yellow-700">
                    Water level is running low - please refill soon
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <span className="text-red-700">
                    Temperature above optimal range in Zone 2
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Controls
              </h2>
              <ControlPanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard; // Ensure it's the default export
