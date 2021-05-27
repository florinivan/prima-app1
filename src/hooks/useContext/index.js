import React, { useState, useContext } from "react";
import { data } from "../../data";
const AppContext = React.createContext();

const Index = () => {
  const [persone, setPersone] = useState(data);
  const removeElemen = (id) => {
    setPersone(persone.filter((item) => item.id !== id));
  };
  return (
    <AppContext.Provider value={{ persone, removeElemen }}>
      <div>
        <h2>Elenco Persone</h2>
        <Elenco />
      </div>
    </AppContext.Provider>
  );
};

const Elenco = () => {
  const { persone } = useContext(AppContext);
  return (
    <div>
      {persone.map((item, index) => {
        return <Persona key={index} {...item}></Persona>;
      })}
    </div>
  );
};

const Persona = ({ id, name }) => {
  const { removeElemen } = useContext(AppContext);
  return (
    <article className='card bg-white my-3 shadow-sm'>
      <h4>{name}</h4>
      <button className='button delete-button' onClick={() => removeElemen(id)}>
        {" "}
        Elimina{" "}
      </button>
    </article>
  );
};

export default Index;
