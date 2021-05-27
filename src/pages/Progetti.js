import React from "react";
import { Link } from "react-router-dom";

const Progetti = () => {
  return (
    <div>
      <Link to='/progetti/1'>Progetto 1</Link>
      <Link to='/progetti/2'>Progetto 2</Link>
      <Link to='/progetti/3'>Progetto 3</Link>
    </div>
  );
};

export default Progetti;
