import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2] text-gray-700 pt-10 pb-6 mt-20 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo & Deskripsi */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start mb-4">
            <img src="/images/kita-rancang.png" alt="Logo" className="h-10 w-auto mr-2" />
            <span className="font-bold text-xl text-black">Kita Rancang</span>
          </div>
          <p className="text-sm text-gray-600">
            Jasa pembuatan website & logo. Rancang ide kamu jadi nyata bersama kami.
          </p>
        </div>

        {/* Menu Service */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-gray-800 mb-3">Service</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/projects" className="hover:text-black transition">Jasa Web</Link></li>
            <li><Link to="/logo" className="hover:text-black transition">Jasa Logo</Link></li>
            <li><Link to="/jasa-makalah" className="hover:text-black transition">Jasa Makalah & Proposal</Link></li>
          </ul>
        </div>

        {/* Kontak */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-gray-800 mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a href="mailto:halo@kitarancang.com" className="hover:text-black transition">
                halo@kitarancang.com
              </a>
            </li>
            <li>
              WhatsApp:{" "}
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
                081210940483
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a href="https://instagram.com/kitarancang" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
                @kitarancang
              </a>
            </li>
          </ul>
        </div>

        {/* Info Tambahan */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-gray-800 mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/#about" className="hover:text-black transition">Tentang Kami</Link></li>
            <li><Link to="/our-client" className="hover:text-black transition">Our Client</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-10 px-4">
        © {new Date().getFullYear()} Kita Rancang. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
