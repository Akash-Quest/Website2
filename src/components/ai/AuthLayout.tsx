'use client';

import React from 'react';
import Link from 'next/link';

interface AuthLayoutProps {
  children: React.ReactNode;
  showBack?: boolean;
}

export default function AuthLayout({ children, showBack = false }: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#F8F7F4] font-['Inter_Tight']">
      {/* Left Column: Dark Blue Mesh Gradient Artwork */}
      <div className="hidden md:flex md:w-1/2 bg-[#0005C0] relative overflow-hidden items-center justify-center">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#0B0C10] via-[#0D1B2A] to-[#1D1EE3] opacity-90"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #1D1EE3 0%, #00024B 60%, #02020A 100%)`
          }}
        />
        {/* Subtle decorative center focus point */}
        <div className="w-[1px] h-[1px] shadow-[0_0_150px_100px_rgba(29,30,227,0.8)] z-10" />
      </div>

      {/* Right Column: Form Container */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-10 2xl:p-20 relative min-h-screen">
        {/* Top Decorative Sparkle */}
        <div className="absolute top-10 right-10 text-[#1D1EE3] text-xs">
          ✦
        </div>

        <div className="max-w-md w-full mx-auto my-auto flex flex-col gap-6">
          {/* Back Button */}
          {showBack && (
            <Link 
              href="/auth/signin" 
              className="text-xs text-gray-600 hover:text-black flex items-center gap-1 transition-colors w-fit"
            >
              ← Go Back
            </Link>
          )}

          {/* Logo Header */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-[#1D1EE3] font-black text-xl italic tracking-wider">
              <span>Ask</span>
              <span className="text-[#1D1EE3]">✦</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#1D1EE3]">
              SKYQUEST
            </h1>
          </div>

          {/* Form Content Body */}
          {children}
        </div>

        {/* Bottom Decorative Sparkle */}
        <div className="absolute bottom-12 left-12 text-[#1D1EE3] text-lg">
          ✦
        </div>
      </div>
    </div>
  );
}