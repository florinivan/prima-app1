import React, { useState, useEffect } from "react";

const UseEfectCleanup = () => {
  const [valore, setValore] = useState(0);
  const dimensioneWindow = () => {
    setValore(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", dimensioneWindow);
    return () => {
      window.removeEventListener("resize", dimensioneWindow);
    };
  });
  return (
    <div>
      <h2>{valore}</h2>
    </div>
  );
};

export default UseEfectCleanup;
