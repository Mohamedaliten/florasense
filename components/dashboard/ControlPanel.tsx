"use client"; // Ensures the component is rendered on the client side

import React, { useState } from "react";
import { Droplets, Fan, Sun } from "lucide-react";

interface ControlButtonProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const ControlButton = ({ icon, label, active, onClick }: ControlButtonProps) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center p-4 rounded-lg transition-all ${
      active
        ? "bg-green-500 text-white shadow-lg scale-105"
        : "bg-white text-gray-600 hover:bg-green-50"
    }`}
  >
    <div className="p-3 rounded-full bg-opacity-20 bg-white mb-2">{icon}</div>
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export const ControlPanel = () => {
  const [waterActive, setWaterActive] = useState(false);
  const [ventActive, setVentActive] = useState(false);
  const [lightActive, setLightActive] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-4">
      <ControlButton
        icon={<Droplets className="h-6 w-6" />}
        label="Water Supply"
        active={waterActive}
        onClick={() => setWaterActive(!waterActive)}
      />
      <ControlButton
        icon={<Fan className="h-6 w-6" />}
        label="Ventilation"
        active={ventActive}
        onClick={() => setVentActive(!ventActive)}
      />
      <ControlButton
        icon={<Sun className="h-6 w-6" />}
        label="Lighting"
        active={lightActive}
        onClick={() => setLightActive(!lightActive)}
      />
    </div>
  );
};
