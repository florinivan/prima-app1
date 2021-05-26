import React, { useState, useEffect } from "react";

const UseEfectBase = () => {
  const [valore, setValore] = useState(0);
  const cambiaValore = () => {
    setValore((oldValore) => oldValore + 1);
  };
  // il secondo parmetro descrive la dipendenza quando vine efetuato useEfect
  useEffect(() => {
    console.log("prima useefect");
    // viene usato perchè dipendente
    if (valore > 2) {
      console.log(`valore: ${valore}`);
      document.title = `valore: ${valore}`;
    }
  }, [valore]);
  return (
    <div>
      <h2>{valore}</h2>
      <button onClick={cambiaValore}>Modifica valore</button>
    </div>
  );
};

export default UseEfectBase;
