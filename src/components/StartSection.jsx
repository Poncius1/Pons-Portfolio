import React from "react";

const StartSection = () => {
  const styles = {
    container: {
      position: "fixed",
      top: "50%",
      left: "15%", // Ajusta la posición izquierda según tus necesidades
      transform: "translate(-50%, -50%)",
      textAlign: "left",
      padding: "20px", // Ajusta el padding según tus necesidades
      border: '1px solid #ccc',
      borderRadius: "8px",
      width: "400px", // Ajusta el ancho según tus necesidades
      height: "220px", // Ajusta la altura según tus necesidades
    },
    header: {
      marginBottom: "10px",
      color: "#fffef5", // Cambia el color del texto del encabezado
      fontSize: '2.8rem',
    },
    text: {
      color: "#b3b2af", // Cambia el color del texto pequeño
      fontSize: '1.3rem',
    },
    button: {
      cursor: "pointer",
      background: "#007BFF",
      color: "#fff",
      border: "none",
      padding: "20px 35px", // Ajusta el padding según tus necesidades
      borderRadius: "15px",
      position: "relative",
      top: "10px",
    },
  };

  const headerText = "Hi, I'm Angel Ponce";
  const smallText = "Software Developer from Mexico.";
  const buttonText = "Start";

  const handleButtonClick = () => {
    alert("¡Botón clickeado!");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>{headerText}</h2>
      <p style={styles.text}>{smallText}</p>
      <button style={styles.button} onClick={handleButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default StartSection;
