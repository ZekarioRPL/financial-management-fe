'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
  email: z.string().email('Email tidak valid'),
  password: z.string().min(8, 'Minimal 8 karakter'),
});

const registerSchema = loginSchema.extend({
  firstName: z.string().min(1, 'Nama depan wajib diisi'),
  lastName: z.string().min(1, 'Nama belakang wajib diisi'),
  phone: z.string().min(10, 'Nomor tidak valid'),
});

type LoginFormData = z.infer<typeof loginSchema>;
type RegisterFormData = z.infer<typeof registerSchema>;

const AuthForm = () => {
  const pathname = usePathname(); // menangkap path URL
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // Deteksi halaman berdasarkan URL
  useEffect(() => {
    if (pathname.includes('register')) {
      setMode('register');
    } else {
      setMode('login');
    }
  }, [pathname]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData | RegisterFormData>({
    resolver: zodResolver(mode === 'login' ? loginSchema : registerSchema),
  });

  const onSubmit = (data: LoginFormData | RegisterFormData) => {
    console.log('Form Data:', data);
    router.push('/dashboard');
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        {mode === 'login' ? 'Masuk' : 'Daftar'}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {mode === 'register' && (
          <>
            <div>
              <label className="block mb-1 text-sm font-medium">Nama Depan</label>
              <input
                type="text"
                {...register('firstName')}
                className="w-full px-4 py-2 border rounded-md"
              />
              {/* Use type assertion here */}
             
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Nama Belakang</label>
              <input
                type="text"
                {...register('lastName')}
                className="w-full px-4 py-2 border rounded-md"
              />
              {/* Use type assertion here */}
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">No. Telepon</label>
              <input
                type="tel"
                {...register('phone')}
                className="w-full px-4 py-2 border rounded-md"
              />
              {/* Use type assertion here */}
            </div>
          </>
        )}

        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            {...register('email')}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Kata Sandi </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              className="w-full px-4 py-2 border rounded-md"
            />
          <button
            type="button"
            className="absolute right-3 top-2 text-sm text-blue-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
          </button>

          </div>
          {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          {mode === 'login' ? 'Masuk' : 'Daftar'}
        </button>

        <p className="text-center text-sm mt-4">
          {mode === 'login' ? (
            <>
              Belum punya akun?{' '}
              <a href="/register" className="text-blue-600 hover:underline">
                Daftar
              </a>
            </>
          ) : (
            <>
              Sudah punya akun?{' '}
              <a href="/login" className="text-blue-600 hover:underline">
                Masuk
              </a>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
