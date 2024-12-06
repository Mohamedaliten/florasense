"use client";

import { Thermometer, Droplets, Sun, Wind } from "lucide-react";

interface SensorCardProps {
  type: "temperature" | "humidity" | "co2" | "light";
  value: number;
  unit: string;
}

const iconMap = {
  temperature: Thermometer,
  humidity: Droplets,
  co2: Wind,
  light: Sun,
};

const colorMap = {
  temperature: "text-red-500",
  humidity: "text-blue-500",
  co2: "text-purple-500",
  light: "text-yellow-500",
};

const bgMap = {
  temperature: "bg-red-50",
  humidity: "bg-blue-50",
  co2: "bg-purple-50",
  light: "bg-yellow-50",
};

export const SensorCard = ({ type, value, unit }: SensorCardProps) => {
  const Icon = iconMap[type];
  const textColor = colorMap[type];
  const bgColor = bgMap[type];

  return (
    <div className={`p-6 rounded-xl ${bgColor} shadow-sm`}>
      <div className="flex items-center justify-between">
        <div className={`p-2 rounded-lg ${textColor}`}>
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-sm font-medium text-gray-500 capitalize">{type}</span>
      </div>
      <div className="mt-4">
        <span className={`text-2xl font-bold ${textColor}`}>
          {value}
          <span className="text-sm ml-1">{unit}</span>
        </span>
      </div>
    </div>
  );
};
