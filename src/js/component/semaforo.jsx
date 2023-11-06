import React, { useState } from "react";

const Semaforo = () => {
  const [brillando, setBrillando] = useState(null);

  const handleLuzClick = (luz) => {
    setBrillando(luz);
  };

  const newClass = (luz) => {
    return `luz ${luz} ${brillando === luz ? "brillante" : ""}`;
  };

  return (
    <div className="contenedor-principal">
      <div className="palo-semaforo"></div>
      <div className="cuerpo-semaforo">
        <div className={newClass("rojo")} onClick={() => handleLuzClick("rojo")}></div>
        <div className={newClass("amarillo")} onClick={() => handleLuzClick("amarillo")}></div>
        <div className={newClass("verde")} onClick={() => handleLuzClick("verde")}></div>
      </div>
    </div>
  );
};

export default Semaforo;
