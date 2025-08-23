import React, { useEffect, useState } from "react";
import Stack from "./Stack";
import About from "./About";
import Benefit from "./Benefit";
import { useLocation } from "react-router-dom";

const slides = [
  {
    image: "/images/ss dandalimans.jpg",
    bgFrom: "from-green-300",
    bgTo: "to-yellow-300",
    title: (
      <>
        <span className="bg-white px-2 py-1 rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300">
          FnB
        </span>{" "}
        <span className="bg-pink-500 text-white px-2 py-1 rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300">
          WEB
        </span>
      </>
    ),
    description: (
      <>
        Web order FnB <br />
        Memudahkan pembeli untuk membeli produk yang di jual <br />
      </>
    ),
    descColor: "text-gray-900",
    descClass: "font-mono italic",
  },
  {
    image: "/images/ss doit.jpg",
    bgFrom: "from-blue-300",
    bgTo: "to-purple-300",
    title: (
      <>
        <span className="bg-white px-2 py-1 rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300">
          WEB
        </span>{" "}
        <span className="bg-purple-500 text-white px-2 py-1 rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300">
          E-WALLET
        </span>
      </>
    ),
    description: (
      <>
        Simpan dan Kelola Uang Digital dengan Aman <br />
        Tanpa Biaya Tambahan dan Mudah Digunakan
      </>
    ),
    descColor: "text-indigo-900",
    descClass: "font-mono italic",
  },
  {
    image: "/images/ss jkt.png",
    bgFrom: "from-rose-500",
    bgTo: "to-indigo-900",
    title: (
      <>
        <span className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white px-2 py-1 rounded-md shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300">
          LANDING
        </span>{" "}
        <span className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-2 py-1 rounded-md shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300">
          PAGE
        </span>
      </>
    ),
    description: (
      <>
        Tingkatkan penjualan dengan Landing Page berkonversi tinggi <br />
        Optimalkan tracking & analisis bisnis Anda dengan mudah <br />
      </>
    ),
    descColor: "text-white",
    descClass: "font-mono italic",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const location = useLocation();

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <div className="mt-6 sm:mt-10 relative">
        {/* Background section */}
        <section
          className={`bg-gradient-to-br ${slides[current].bgFrom} ${slides[current].bgTo}
              rounded-xl sm:rounded-2xl mx-2 xs:mx-3 sm:mx-6 md:mx-10 overflow-hidden shadow-2xl`}
        >
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-between 
                             px-3 xs:px-4 sm:px-6 md:px-12 lg:px-16 
                             py-6 xs:py-8 sm:py-10 md:py-16 lg:py-20
                             transition-transform duration-500"
                >
                  {/* Text Section */}
                  <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-purple-900 mb-3 xs:mb-4 sm:mb-6">
                      {slide.title}
                    </h1>
                    <p
                      className={`text-xs xs:text-sm sm:text-base md:text-lg mb-3 xs:mb-4 sm:mb-6 leading-relaxed ${slide.descColor} ${slide.descClass}`}
                    >
                      {slide.description}
                    </p>
                  </div>

                  {/* Image Section */}
                  <div className="md:w-1/2 mt-5 xs:mt-6 sm:mt-8 md:mt-0 text-center">
                    <img
                      src={slide.image}
                      alt="Slide"
                      className="w-[85%] xs:w-[80%] sm:w-[70%] md:w-[65%] lg:w-[80%] h-auto mx-auto rounded-lg sm:rounded-2xl shadow-lg 
                                 transition-transform duration-700 hover:scale-105 hover:-translate-y-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  current === index ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Prev button */}
          <div className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/70 border border-gray-300 backdrop-blur-md hover:bg-white hover:shadow-xl transition duration-300"
            >
              <div className="w-0 h-0 border-t-4 xs:border-t-6 sm:border-t-8 border-b-4 xs:border-b-6 sm:border-b-8 border-r-4 xs:border-r-6 sm:border-r-8 border-t-transparent border-b-transparent border-r-gray-700" />
            </button>
          </div>

          {/* Next button */}
          <div className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/70 border border-gray-300 backdrop-blur-md hover:bg-white hover:shadow-xl transition duration-300"
            >
              <div className="w-0 h-0 border-t-4 xs:border-t-6 sm:border-t-8 border-b-4 xs:border-b-6 sm:border-b-8 border-l-4 xs:border-l-6 sm:border-l-8 border-t-transparent border-b-transparent border-l-gray-700" />
            </button>
          </div>
        </section>
      </div>

      {/* STACK SECTION */}
      <Stack />

      {/* BENEFIT SECTION */}
      <Benefit />

      {/* ABOUT SECTION */}
      <section id="about" className="mt-20">
        <About />
      </section>
    </>
  );
};

export default Home;
