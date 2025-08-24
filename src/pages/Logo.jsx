import React from "react";

const logos = [
  {
    name: "Logo D'Andalimans",
    image: "/images/Dandalimans.png",
  },
  {
    name: "Logo JKT 23 FC",
    image: "/images/jkt23.jpg",
  },
  // contoh tambahan, bisa tambah berapa pun nanti tetap center
  // {
  //   name: "Logo Baru",
  //   image: "/images/new-logo.png",
  // },
];

const Logo = () => {
  return (
    <section
      className="bg-white py-20 px-6"
      id="logo-gallery"
    >
      <div className="max-w-6xl mx-auto text-center w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Our Project Logo
        </h2>
        <p className="text-gray-600 mb-12">
          Beberapa contoh logo hasil desain kami untuk berbagai brand dan kebutuhan.
        </p>

        {/* Grid otomatis responsif & center */}
        <div className="grid gap-10 justify-center grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col items-center"
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
