import React from "react";

const About = () => {
  return (
    <section className="w-full min-h-[100vh] px-6 md:px-20 py-16 flex items-start justify-center">
      {/* KONTEN */}
      <div className="max-w-4xl mx-auto text-center -mt-10">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          <span className="relative z-10 inline-block">TENTANG</span>{" "}
          <span className="relative z-10 text-purple-600 inline-block">KAMI</span>
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mt-20">
          Kami menyediakan layanan digital untuk membantu kebutuhan Anda dalam
          berbagai aspek kreatif dan profesional.
          <br />
          <br />
          <strong>Jasa Pembuatan Website</strong> – Kami membangun website yang
          modern, responsif, dan sesuai kebutuhan bisnis atau personal Anda.
          <br />
          <br />
          <strong>Jasa Pembuatan Logo</strong> – Logo unik dan profesional untuk
          memperkuat identitas brand Anda.
          <br />
          <br />
          <strong>Jasa Pembuatan Makalah & Proposal</strong> – Membantu Anda
          menyusun makalah dan proposal dengan rapi, jelas, dan sesuai standar
          akademik atau bisnis.
          <br />
          <br />
          Dengan komitmen pada kualitas dan kepuasan klien, kami siap membantu
          mewujudkan ide Anda menjadi kenyataan.
        </p>
      </div>
    </section>
  );
};

export default About;
