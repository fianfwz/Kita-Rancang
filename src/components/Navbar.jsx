import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const handleCloseDropdown = () => {
    setDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Menutup menu mobile saat resize ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
      onClick={handleCloseDropdown}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO KIRI */}
        <Link to="/" className="flex items-center space-x-4">
          <img
            src="/images/kita-rancang.png"
            alt="Logo"
            className="h-14 w-auto"
          />
          <span className="text-black font-extrabold text-2xl tracking-wide">Kita Rancang</span>
        </Link>

        {/* HAMBURGER UNTUK MOBILE */}
        <button
          className="md:hidden text-3xl text-black"
          onClick={(e) => {
            e.stopPropagation();
            toggleMobileMenu();
          }}
        >
          ☰
        </button>

        {/* MENU NAVBAR */}
        <ul
          className={`${
            isMobileMenuOpen ? 'flex flex-col items-center text-center space-y-6 py-4' : 'hidden'
          } md:flex md:flex-row md:items-center md:space-x-10 md:space-y-0 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent text-black font-semibold text-base mt-4 md:mt-0 p-6 md:p-0 shadow-md md:shadow-none z-40`}
        >
          <li className="py-2 md:py-0">
            <Link to="/" onClick={() => { handleCloseDropdown(); setIsMobileMenuOpen(false); }}>
              HOME
            </Link>
          </li>

          <li className="relative py-2 md:py-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDropdown('jasa');
              }}
              className="hover:text-purple-600"
            >
              JASA KAMI ▾
            </button>
            {dropdown === 'jasa' && (
              <ul className="mt-2 md:absolute md:top-full md:right-0 md:w-60 bg-white shadow-lg rounded-md py-2 z-50 text-center">
                <li>
                  <Link
                    to="/projects"
                    onClick={() => {
                      handleCloseDropdown();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-4 py-2 font-light text-gray-800 hover:bg-purple-100 hover:text-purple-700 rounded"
                  >
                    JASA PEMBUATAN WEB
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Logo"
                    onClick={() => {
                      handleCloseDropdown();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-4 py-2 font-light text-gray-800 hover:bg-purple-100 hover:text-purple-700 rounded"
                  >
                    JASA PEMBUATAN LOGO
                  </Link>
                </li>
                <li>
                  <Link
                    to="/MakalahProposal"
                    onClick={() => {
                      handleCloseDropdown();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-4 py-2 font-light text-gray-800 hover:bg-purple-100 hover:text-purple-700 rounded"
                  >
                    JASA PEMBUATAN MAKALAH & PROPOSAL
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="py-2 md:py-0">
            <Link to="/clients" onClick={() => { handleCloseDropdown(); setIsMobileMenuOpen(false); }}>
              OUR CLIENTS
            </Link>
          </li>

          <li className="py-2 md:py-0">
            <Link to="/contact" onClick={() => { handleCloseDropdown(); setIsMobileMenuOpen(false); }}>
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
