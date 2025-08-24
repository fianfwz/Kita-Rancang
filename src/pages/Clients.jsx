import React from "react";

const clients = [
  {
    name: "JKT 23 FC",
    image: "/images/jkt23.jpg",
  },
  {
    name: "D'Andalimans",
    image: "/images/Dandalimans.png",
  },
];

const Clients = () => {
  return (
    <section className="bg-gray-50 py-20 px-6" id="clients">
      <div className="max-w-6xl mx-auto text-center w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Our Clients
        </h2>
        <p className="text-gray-600 mb-12">
          beberapa klien yang pernah mempercayakan kami dalam
          pembuatan desain dan pengembangan brand mereka.
        </p>

        {/* Grid responsif & center */}
        <div className="grid gap-10 justify-center grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col items-center"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-full h-28 object-contain mb-4"
              />
              <h3 className="text-lg font-medium text-gray-700">
                {client.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;