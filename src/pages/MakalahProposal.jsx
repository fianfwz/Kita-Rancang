import React from "react";

const makalahList = [
  {
    title: "Pengaruh Teknologi AI terhadap Dunia Pendidikan",
    description:
      "Makalah ini membahas dampak positif dan negatif AI dalam sistem pembelajaran modern.",
    link: "/files/makalah-ai.pdf",
  },
  {
    title: "Proposal Kegiatan Web Development Bootcamp",
    description:
      "Proposal kegiatan pelatihan web development untuk mahasiswa Fasilkom selama 1 minggu.",
    link: "/files/proposal-bootcamp.pdf",
  },
  {
    title: "Analisis Sistem Informasi Rumah Sakit",
    description:
      "Studi kasus penggunaan sistem informasi terintegrasi pada rumah sakit rujukan nasional.",
    link: "/files/sistem-informasi-rs.pdf",
  },
];

const MakalahProposal = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          📚 Makalah & Proposal
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {makalahList.map((item, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-center px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-sm hover:brightness-110 transition"
              >
                📄 Lihat Dokumen
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MakalahProposal;
