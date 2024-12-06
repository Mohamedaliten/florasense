'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-green-800">PlantGuard</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="#features" className="text-gray-700 hover:text-green-600 px-3 py-2">
                Features
              </Link>
              <Link href="#mobile-app" className="text-gray-700 hover:text-green-600 px-3 py-2">
                Mobile App
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-green-600 px-3 py-2">
                Testimonials
              </Link>
              <Link href="#faq" className="text-gray-700 hover:text-green-600 px-3 py-2">
                FAQ
              </Link>
              <Link href="/login">
                <Button variant="default" className="bg-green-600 hover:bg-green-700">
                  Login
                </Button>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#features" className="block text-gray-700 hover:text-green-600 px-3 py-2">
              Features
            </Link>
            <Link href="#mobile-app" className="block text-gray-700 hover:text-green-600 px-3 py-2">
              Mobile App
            </Link>
            <Link href="#testimonials" className="block text-gray-700 hover:text-green-600 px-3 py-2">
              Testimonials
            </Link>
            <Link href="#faq" className="block text-gray-700 hover:text-green-600 px-3 py-2">
              FAQ
            </Link>
            <Link href="/login" className="block px-3 py-2">
              <Button variant="default" className="w-full bg-green-600 hover:bg-green-700">
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}