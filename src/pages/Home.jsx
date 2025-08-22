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
        High Conversion Landing Page <br />
        Naikkan Penjualan Online Sampai 5x Lipat Dengan <br />
        Landing Page yang Convert
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
        High Conversion Landing Page <br />
        Naikkan Penjualan Online Sampai 5x Lipat Dengan <br />
        Landing Page yang Convert
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
      <div className="mt-10 relative">
        {/* Background section */}
        <section
          className={`bg-gradient-to-br ${slides[current].bgFrom} ${slides[current].bgTo}
              rounded-[2rem] mx-4 md:mx-10 overflow-hidden shadow-2xl`}
        >
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-between px-6 py-10 md:px-16 md:py-20 
                             transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-purple-900 mb-6">
                      {slide.title}
                    </h1>
                    <p
                      className={`text-lg mb-6 leading-relaxed ${slide.descColor} ${slide.descClass}`}
                    >
                      {slide.description}
                    </p>
                  </div>
                  <div className="md:w-1/2 mt-10 md:mt-0 text-center">
                    <img
                      src={slide.image}
                      alt="Slide"
                      className="w-[85%] md:w-[70%] lg:w-[90%] h-auto mx-auto rounded-2xl shadow-lg 
                                 transition-transform duration-700 hover:scale-105 hover:-translate-y-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Prev button */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/70 border border-gray-300 backdrop-blur-md hover:bg-white hover:shadow-xl transition duration-300"
            >
              <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-gray-700" />
            </button>
          </div>

          {/* Next button */}
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/70 border border-gray-300 backdrop-blur-md hover:bg-white hover:shadow-xl transition duration-300"
            >
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-gray-700" />
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
