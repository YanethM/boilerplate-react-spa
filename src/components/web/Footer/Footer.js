import React from "react";
import "./Footer.scss"; // Estilo CSS para el footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <h3>Información de contacto</h3>
        <p>
          Correo electrónico:{" "}
          <a
            href="mailto:
            mantenimientoandino@mantenimientoandino.co"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </p>
        <p>
          Teléfono: <a href="tel:+573104444444">+57 310 444 4444</a>
        </p>
        <p>
          Dirección:{" "}
          <a
            href="https://goo.gl/maps/9JvQ1J1Z1Z1Z1Z1Z1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Calle 1 # 1 - 1
          </a>
        </p>
      </div>

      <div className="footer__social">
        <a
          href="https://www.facebook.com/tu-pagina-de-facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com/tu-cuenta-de-twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/tu-cuenta-de-instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="footer__contact">
        <a
          href="https://wa.me/tu-numero-de-telefono"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i> Contactar por WhatsApp
        </a>
      </div>
      © 2023 SENNOVALAB
    </footer>
  );
};

export default Footer;
