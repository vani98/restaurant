import React from "react";
import "./Footer.css"
const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="footer-column-1">
        <div className="footer-description">
          <p>The Golden Grill</p>
          <p>
            ¡La calidad de nuestra comida y servicio es nuestra prioridad!
            ¡Gracias por elegirnos!
          </p>
        </div>
        <div className="footer-socialnetworks">
          <p>Síguenos en las redes sociales para más novedades y promociones</p>
          <div className="footer-socialnetworks-logos">
            <img src="/images/logo-instagram.png" alt="Logo Instagram" />
            <img src="/images/logo-facebook.png" alt="Logo Facebook" />
            <img src="/images/logo-twitter.png" alt="Logo Twitter" />
          </div>
        </div>
      </div>
      <div className="footer-column-2">
        <div className="footer-explore">
          <p>Explora</p>
          <p>Inicio</p>
          <p>Menu</p>
          <p>Nosotros</p>
          <p>Contacto</p>
        </div>
        <div className="footer-payment">
          <p>Medios de pago</p>
          <img src="/images/tarjeta-visa.png" alt="Tarjeta Visa" />
          <img src="/images/tarjeta-mastercard.png" alt="Tarjeta Mastercard" />
          <img src="/images/tarjeta-americanexpress.png" alt="Tarjeta American Express" />
          <img src="/images/tarjeta-maestro.png" alt="Tarjeta Mestro" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
