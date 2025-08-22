import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Stack from "./pages/Stack";
import Logo from "./pages/Logo";
import Benefit from "./pages/Benefit";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppBubble from "./components/WhatsAppBubble";
import MakalahProposal from "./pages/MakalahProposal";

const App = () => {
  return (
    <>
      <Navbar />

      {/* Konten Halaman */}
      <main className="relative z-10 pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/makalahproposal" element={<MakalahProposal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/benefit" element={<Benefit />} />
        </Routes>

        <WhatsAppBubble />
      </main>

      <Footer />
    </>
  );
};

export default App;
