'use client';

import React, { useState } from 'react';
import AuthLayout from '@/components/ai/AuthLayout';
import { ArrowRight } from 'iconsax-react';

export default function SignInPage() {
  const [email, setEmail] = useState('');

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6 mt-2">
        <h2 className="text-lg sm:text-xl font-medium text-[#03030F]">
          Sign in or create an account to explore the experience
        </h2>

        <div className="flex flex-col gap-4">
          <label className="text-xs text-gray-500 font-medium -mb-2">Email</label>
          <div className="relative flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username@Email.Com"
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1D1EE3] transition-colors pr-12"
            />
            <button className="absolute right-2 p-2 bg-[#1D1EE3] text-white rounded-md hover:bg-blue-700 transition-colors">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-xs text-gray-400">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Logins */}
        <div className="flex flex-col gap-3">
          <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
            <span></span> Continue With Apple
          </button>
          <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
            <span className="text-red-500 font-bold">G</span> Continue With Google
          </button>
          <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
            <span className="text-blue-600 font-bold">in</span> Continue With LinkedIn
          </button>
          <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
            <span>🔑</span> Continue With SSO
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}