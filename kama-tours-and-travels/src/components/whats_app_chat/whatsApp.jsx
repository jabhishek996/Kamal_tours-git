import React from "react";
import "./whatsApp.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919423287988"; // 👉 replace with your number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;