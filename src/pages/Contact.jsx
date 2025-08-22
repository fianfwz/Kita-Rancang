import React from "react";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-gray-800">
      <h2 className="text-4xl font-bold mb-6 text-center text-[#1f2e12]">
        Hubungi Kami
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Kami siap membantu Anda dalam kebutuhan pembuatan website, logo, makalah, dan proposal.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* WhatsApp */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition"
        >
          <FaWhatsapp className="text-green-500 text-4xl mb-4" />
          <h3 className="font-semibold text-lg">WhatsApp</h3>
          <p className="text-sm mt-1 text-center text-gray-600">+62 812-3456-7890</p>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/namaigkamu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition"
        >
          <FaInstagram className="text-pink-500 text-4xl mb-4" />
          <h3 className="font-semibold text-lg">Instagram</h3>
          <p className="text-sm mt-1 text-center text-gray-600">@namaigkamu</p>
        </a>

        {/* Gmail */}
        <a
          href="mailto:favian@example.com"
          className="flex flex-col items-center bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition"
        >
          <FaEnvelope className="text-red-500 text-4xl mb-4" />
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="text-sm mt-1 text-center text-gray-600">favian@example.com</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
