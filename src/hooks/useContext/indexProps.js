import React, { useState } from "react";
import { data } from "../../data";

const Index = () => {
  const [persone, setPersone] = useState(data);
  const removeElemen = (id) => {
    setPersone(persone.filter((item) => item.id !== id));
  };
  return (
    <div>
      <h2>Elenco Persone</h2>
      <Elenco persone={persone} removeElemen={removeElemen}></Elenco>
    </div>
  );
};

const Elenco = (persone, removeElemen) => {
  return (
    <div>
      {persone.map((item, index) => {
        return (
          <Persona key={index} {...item} removeElemen={removeElemen}></Persona>
        );
      })}
    </div>
  );
};

const Persona = ({ id, name, removeElemen }) => {
  <article className='card bg-white my-3 shadow-sm'>
    <h4>{name}</h4>
    <button className='button delete-button' onClick={() => removeElemen(id)}>
      {" "}
      Elimina{" "}
    </button>
  </article>;
};

export default Index;
