import React from "react";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "../Styles/FooterPages.css"; // Se importa el CSS de manera correcta

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Contenedor de los íconos */}
      <div className="social-icons">
        <a
          href="www.linkedin.com/in/yocelyn-rivera-83327622b"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://www.instagram.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="icon" />
        </a>
        <a
          href="mailto:yocelynrivera9@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Correo"
        >
          <FaEnvelope className="icon" />
        </a>
      </div>

      {/* Texto al final */}
      <p className="footer-text">
        &copy;2025 Yocelyn Rivera | Desarrolladora Web y Técnica en soporte
      </p>
    </footer>
  );
};

export default Footer;
