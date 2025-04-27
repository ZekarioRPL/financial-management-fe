
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from './components/ui/Button';
import { Card, CardContent } from './components/ui/Card';

declare global {
  interface Window {
    AOS: {
      init: (options?: { duration: number }) => void;
      refresh: () => void;
    };
  }
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js";
      script.onload = () => {
        if (window.AOS) {
          window.AOS.init({ duration: 1000 });
        }
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F8F8] text-black font-poppins">

      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-lg fixed w-full z-10 top-0">
        <div className="font-bold text-2xl text-[#23005B]">DompetSehat</div>

        {/* Tombol Hamburger di mobile */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <button className="text-2xl focus:outline-none">
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Menu untuk desktop */}
        <nav className="hidden lg:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-[#FF6A3D] transition-all my-auto">Home</a>
          <a href="#features" className="text-gray-700 hover:text-[#FF6A3D] transition-all my-auto">Fitur</a>
          <a href="#about" className="text-gray-700 hover:text-[#FF6A3D] transition-all my-auto">Tentang</a>
          <a href="#testimonials" className="text-gray-700 hover:text-[#FF6A3D] transition-all my-auto">Testimoni</a>
          <Button variant="ghost" className="text-[#23005B] hover:text-[#FF6A3D]">Login</Button>
          <Button className="bg-[#FF6A3D] text-white px-6 py-2 rounded-full hover:bg-[#FF4F2D] transition-all">Daftar</Button>
        </nav>

        {/* Dropdown Menu untuk mobile */}
        <div
          className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white shadow-lg`}
        >
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href="#home" className="text-gray-700 hover:text-[#FF6A3D] transition-all">Home</a>
            <a href="#features" className="text-gray-700 hover:text-[#FF6A3D] transition-all">Fitur</a>
            <a href="#about" className="text-gray-700 hover:text-[#FF6A3D] transition-all">Tentang</a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#FF6A3D] transition-all">Testimoni</a>
            <Button variant="ghost" className="text-[#23005B] hover:text-[#FF6A3D]">Login</Button>
            <Button className="bg-[#FF6A3D] text-white px-6 py-2 rounded-full hover:bg-[#FF4F2D] transition-all">Daftar</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-center px-6 py-32 md:py-64 bg-gradient-to-b from-[#23005B] to-[#5A1E9A] text-white" data-aos="fade-up">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Kelola Keuanganmu dengan Mudah dan Cerdas</h1>
          <p className="text-lg mb-6">Platform manajemen keuangan yang membantu individu dan bisnis mengelola keuangan dengan lebih efisien dan transparan.</p>
          <Button className="bg-[#FF6A3D] text-white px-8 py-3 rounded-full hover:bg-[#FF4F2D] transition-all">Mulai Sekarang</Button>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src="/images/dashboard.png"
            alt="Finance Illustration"
            width={600}
            height={600}
          />
        </div>
      </section>

      {/* Mengapa Memilih DompetSehat? */}
      <section id="features" className="py-24 px-6 md:px-10 bg-white text-black" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-12">Mengapa Memilih DompetSehat?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-10" data-aos="fade-up">
            <div className="text-center md:text-left md:w-1/2">
              <h3 className="font-semibold text-xl mt-4">Keamanan Data Terjamin</h3>
              <p className="text-gray-600 mt-2">Keamanan data keuangan Anda menjadi prioritas utama kami. Informasi keuangan bisnis Anda selalu terlindungi dengan sistem enkripsi terbaik.</p>
            </div>
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
              <Image
                src="/images/security.png"
                alt='securiy'
                width={500}
                height={400}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-10" data-aos="fade-up" data-aos-delay="100">
            <div className="text-center md:text-left md:w-1/2">
              <h3 className="font-semibold text-xl mt-4">Disimpan di Cloud</h3>
              <p className="text-gray-600 mt-2">Dengan teknologi cloud, data keuangan Anda aman dan dapat diakses kapan saja, di mana saja, menggunakan perangkat apapun.</p>
            </div>
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
              <Image
                src="/images/cloud-storage.png"
                alt='cloud'
                width={500}
                height={400}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-10" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center md:text-left md:w-1/2">
              <h3 className="font-semibold text-xl mt-4">Akses di Mana Saja</h3>
              <p className="text-gray-600 mt-2">Akses akun Anda kapan saja, di mana saja, baik melalui website, aplikasi Android, atau iOS. Data dan laporan keuangan selalu ada dalam genggaman tangan Anda.</p>
            </div>
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
              <Image
                src="/images/acess-anywhere.png"
                alt="Akses di Mana Saja"
                width={500}
                height={400}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-10" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center md:text-left md:w-1/2">
              <h3 className="font-semibold text-xl mt-4">Multi User</h3>
              <p className="text-gray-600 mt-2">DompetSehat memungkinkan beberapa pengguna untuk mengakses data dengan hak akses yang berbeda sesuai dengan peran masing-masing.</p>
            </div>
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
              <Image
                src="/images/multi-user.png"
                alt="Multi User"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white text-black py-20 px-6 md:px-10" data-aos="fade-up">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-sm text-[#FF6A3D] mb-2">ABOUT</h3>
            <h2 className="text-2xl font-bold mb-4">Membantu Individu dan Bisnis</h2>
            <p className="text-base mb-10">
              DompetSehat hadir sebagai platform manajemen keuangan terpercaya yang memudahkan pengguna untuk mengelola keuangan dengan lebih efisien dan transparan.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images/laptop.png"
              alt="People Working"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section id="developer" className="py-20 px-6 md:px-10 text-center bg-gradient-to-b from-white to-[#e6f4f1] text-black" data-aos="fade-up">
        <h2 className="text-xl font-semibold mb-6">Developer</h2>
        <div className="flex overflow-x-auto space-x-6">
          <Card className="max-w-xs mx-2">
            <CardContent className="p-6">
              <Image
                src="/images/avatar.jpg"
                alt="Profile"
                width={60}
                height={60}
                className="rounded-full mx-auto mb-4"
              />
              <div className="font-medium">Sef Danny</div>
              <div className="text-sm text-gray-500">Developer</div>
              <p className="text-sm mt-4">
                “Tim DompetSehat memberikan pengalaman luar biasa dalam membangun platform ini. Fitur yang dibangun dengan sangat user-friendly.”
              </p>
            </CardContent>
          </Card>

          <Card className="max-w-xs mx-2">
            <CardContent className="p-6">
              <Image
                src="/images/avatar.jpg"
                alt="Profile"
                width={60}
                height={60}
                className="rounded-full mx-auto mb-4"
              />
              <div className="font-medium">Andra</div>
              <div className="text-sm text-gray-500">Developer</div>
              <p className="text-sm mt-4">
                “Kami bekerja keras untuk memastikan DompetSehat memberikan pengalaman terbaik dan membantu memudahkan manajemen keuangan.”
              </p>
            </CardContent>
          </Card>
          <Card className="max-w-xs mx-2">
            <CardContent className="p-6">
              <Image
                src="/images/avatar.jpg"
                alt="Profile"
                width={60}
                height={60}
                className="rounded-full mx-auto mb-4"
              />
              <div className="font-medium">Rengga</div>
              <div className="text-sm text-gray-500">Developer</div>
              <p className="text-sm mt-4">
                “Kami bekerja keras untuk memastikan Dompet Sehat memberikan pengalaman terbaik dan membantu memudahkan manajemen keuangan.”
              </p>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Testimoni Section */}
      <section id="testimonials" className="bg-[#23005B] text-white py-24 px-6 md:px-10 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-12">Apa Kata Pengguna Kami</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-72">
            <Image
              src="/images/avatar.jpg"
              alt="User 1"
              width={60}
              height={60}
              className="rounded-full mx-auto mb-4"
            />
            <p className="text-sm text-gray-500">Platform ini sangat membantu dalam mengelola keuangan bisnis kami. Sangat mudah digunakan!</p>
            <div className="font-medium mt-4">Rina - Pengusaha</div>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-72">
            <Image
              src="/images/avatar.jpg"
              alt="User 2"
              width={60}
              height={60}
              className="rounded-full mx-auto mb-4"
            />
            <p className="text-sm text-gray-500">Sangat puas dengan fitur analisis keuangan, memudahkan saya merencanakan keuangan pribadi.</p>
            <div className="font-medium mt-4">Andi - Freelancer</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#23005B] text-white text-xs px-6 py-8">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-semibold">DompetSehat</div>
            <div className="text-[10px] mt-2">Terms & Conditions | Privacy</div>
            <div className="text-[10px]">© 2025 DompetSehat. All rights reserved.</div>
          </div>
          <div className="space-x-2">
            <a href="#" className="hover:text-[#FF6A3D] transition-all"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-[#FF6A3D] transition-all"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-[#FF6A3D] transition-all"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:text-[#FF6A3D] transition-all"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
