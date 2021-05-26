import React, { useState } from "react";

const ErroreState = () => {
  //let titolo = "Ciao Mondo";
  const [titolo, setTitolo] = useState("Cia Mondo");
  //console.log(useState(""));

  const cabioTitolo = () => {
    setTitolo("nuovo titolo");
    console.log(titolo);
  };
  return (
    <div>
      <h2>{titolo}</h2>
      <button onClick={() => cabioTitolo()}>cambia</button>
    </div>
  );
};

export default ErroreState;
