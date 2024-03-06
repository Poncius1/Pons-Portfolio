import React,{ useState } from "react";


const ContactForm = ({ hideForm }) => {
  

  const submitForm = () => {
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado");
  };
  return (
    <div className="contact-container">
      <div className="wave">
        <svg
          id="wave"
          style={{ transform: "rotate(180deg)", transition: "0.3s" }}
          viewBox="0 0 1440 410"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(86.397, 62, 243, 1)" offset="0%" />
              <stop stopColor="rgba(255, 28.047, 11, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,205L24,205C48,205,96,205,144,232.3C192,260,240,314,288,307.5C336,301,384,232,432,218.7C480,205,528,246,576,239.2C624,232,672,178,720,164C768,150,816,178,864,211.8C912,246,960,287,1008,266.5C1056,246,1104,164,1152,136.7C1200,109,1248,137,1296,150.3C1344,164,1392,164,1440,191.3C1488,219,1536,273,1584,259.7C1632,246,1680,164,1728,150.3C1776,137,1824,191,1872,177.7C1920,164,1968,82,2016,68.3C2064,55,2112,109,2160,116.2C2208,123,2256,82,2304,82C2352,82,2400,123,2448,123C2496,123,2544,82,2592,61.5C2640,41,2688,41,2736,47.8C2784,55,2832,68,2880,82C2928,96,2976,109,3024,95.7C3072,82,3120,41,3168,34.2C3216,27,3264,55,3312,88.8C3360,123,3408,164,3432,184.5L3456,205L3456,410L3432,410C3408,410,3360,410,3312,410C3264,410,3216,410,3168,410C3120,410,3072,410,3024,410C2976,410,2928,410,2880,410C2832,410,2784,410,2736,410C2688,410,2640,410,2592,410C2544,410,2496,410,2448,410C2400,410,2352,410,2304,410C2256,410,2208,410,2160,410C2112,410,2064,410,2016,410C1968,410,1920,410,1872,410C1824,410,1776,410,1728,410C1680,410,1632,410,1584,410C1536,410,1488,410,1440,410C1392,410,1344,410,1296,410C1248,410,1200,410,1152,410C1104,410,1056,410,1008,410C960,410,912,410,864,410C816,410,768,410,720,410C672,410,624,410,576,410C528,410,480,410,432,410C384,410,336,410,288,410C240,410,192,410,144,410C96,410,48,410,24,410L0,410Z"
          ></path>
        </svg>
      </div>
      <h1 className="header">Let&apos;s Build Together</h1>

      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <div className="contact-button-container">
          <button
            type="button"
            className="button-85"
            onClick={hideForm}
          >
            Back
          </button>
          <button
            type="button"
            className="button-85"
            onClick={() => submitForm()}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
