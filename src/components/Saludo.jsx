import React, { useState } from 'react';

export default function Saludo() {
  const [nombre, setNombre] = useState('');
  const [saludo, setSaludo] = useState('');

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  const saludar = () => {
    if (nombre.trim() !== '') {
      setSaludo(`Hola ${nombre}!`);
    } else {
      setSaludo('Por favor, ingrese su nombre.');
    }
  };

  return (
    <>
      <h1>Saludo</h1>
      <label htmlFor="nombre">
        Ingrese su nombre:
        <input type="text" name="nombre" id="nombre" onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={saludar}>Click!</button>
      <br /><br />
      <div className="saludo">{saludo}</div>
    </>
  );
}
