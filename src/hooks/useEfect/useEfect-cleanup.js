import React, { useState, useEffect } from "react";
import { Breakpoint, BreakpointProvider } from ‘react-socks’;

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
    <Breakpoint large up>
    <div style={}>
      <h2>{valore}</h2>
    </div>
  </Breakpoint>
   <Breakpoint medium down>
    <div style={}>
      <h6>{valore}</h6>
    </div>
  </Breakpoint>
  );
};

export default UseEfectCleanup;
