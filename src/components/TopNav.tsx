'use client';

import Link from 'next/link';
import { AlignJustify, X } from 'lucide-react';
import { useState } from 'react';

export function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full max-w-6xl flex justify-center lg:justify-center py-0">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8">
          <Link
            href="/"
            className="text-md font-bold text-white hover:text-[#B8860B] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/privacy" 
            className="text-md font-bold text-white hover:text-[#B8860B] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms" 
            className="text-md font-bold text-white hover:text-[#B8860B] transition-colors"
          >
            Terms & Conditions
          </Link>
        </div>

        {/* Mobile/Tablet Navigation Button */}
        <div className="lg:hidden flex justify-start w-full">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="text-md font-bold text-white hover:text-[#B8860B] transition-colors cursor-pointer px-4 py-2"
          >
            <AlignJustify className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 lg:hidden">
          <div className="p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Divider Line */}
            <div className="w-full h-px bg-gray-600 mb-8"></div>
            
            {/* Navigation Items */}
            <div className="space-y-6">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block text-xl font-bold text-white hover:text-[#B8860B] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/privacy"
                onClick={() => setIsMenuOpen(false)}
                className="block text-xl font-bold text-white hover:text-[#B8860B] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                onClick={() => setIsMenuOpen(false)}
                className="block text-xl font-bold text-white hover:text-[#B8860B] transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}