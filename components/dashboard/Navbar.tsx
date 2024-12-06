"use client";

import Link from "next/link";
import { Leaf, LogIn } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-800">PlantGuard</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8 ml-10 font-bold">
              <Link href="/" className="text-gray-600 hover:text-green-600">
                Features
              </Link>
              <Link href="/MobileApp" className="text-gray-600 hover:text-green-600">
                Mobile App
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-green-600">
                Pricing
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-green-600">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
