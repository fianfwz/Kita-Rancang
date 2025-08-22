import React from "react";

const logos = [
  {
    name: "Logo D'Andalimans",
    image: "/images/logo-dandalimans.png",
  },
  {
    name: "Logo Videry",
    image: "/images/logo-videry.png",
  },
  {
    name: "Logo JKT 23 FC",
    image: "/images/",
  },
  // Tambahkan logo lainnya di sini
];

const Logo = () => {
  return (
    <section className="bg-white py-20 px-6 min-h-screen" id="logo-gallery">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Logo yang Pernah Saya Buat
        </h2>
        <p className="text-gray-600 mb-12">
          Berikut adalah beberapa contoh logo hasil desain saya untuk berbagai brand dan kebutuhan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                {logo.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logo;
