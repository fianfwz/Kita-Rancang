import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppBubble = () => {
    return (
        <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300"
            aria-label="Chat on WhatsApp"
        >
           <FaWhatsapp className="text-2xl" />
        </a>
    );
};

export default WhatsAppBubble;
