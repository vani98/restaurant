import React from "react";
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact-us">
      <h2>CONTACTANOS</h2>
      <form>
        <input type="text" name="name" placeholder="Nombre" />
        <input type="email" name="email" placeholder="Email" />
        <textarea
          name="message"
          cols="50"
          rows="8"
          placeholder="Mensaje"
        ></textarea>
        <input type="submit" className="send" value="ENVIAR" />
      </form>
      <p>Realiza tu reserva indicandonos la sucursal deseada.</p>
    </div>
  );
};

export default Contact;
