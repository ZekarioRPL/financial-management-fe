'use client';

import React from 'react';
import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-5xl bg-white rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Ilustrasi */}
        <div className="flex items-center justify-center bg-blue-50 p-6">
          <Image
            src="/images/login-illustration.png"
            alt="Ilustrasi Login"
            width={400}
            height={400}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Right: Form */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
