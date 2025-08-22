import React from "react";
import { CheckCircle, Users, Rocket, Star } from "lucide-react";

const benefits = [
  {
    icon: <CheckCircle className="w-10 h-10 text-green-500" />,
    title: "Proven Quality",
    description:
      "Kami memberikan layanan terbaik dengan kualitas yang sudah teruji.",
  },
  {
    icon: <Users className="w-10 h-10 text-blue-500" />,
    title: "Client Oriented",
    description:
      "Fokus pada kebutuhan klien dengan pendekatan personal dan profesional.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Fast & Reliable",
    description:
      "Proses cepat dan hasil yang bisa diandalkan untuk semua kebutuhan digital Anda.",
  },
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Creative Solutions",
    description:
      "Ide-ide fresh dan desain kreatif untuk membuat brand Anda standout.",
  },
];

const Benefit = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600">
          Berikut adalah keuntungan yang Anda dapatkan dengan layanan kami.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefit;
