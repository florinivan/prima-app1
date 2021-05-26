import React, { useState } from "react";
import { data } from "../../data";
// gli hooks iniziare con use e camelcase
// devono stare al interno del componete
// non possono essere condizionati
const ArrayState = () => {
  const [persone, setPersone] = useState(data);
  const removeItem = (id) => {
    let newPeople = persone.filter((el) => el.id !== id);
    setPersone(newPeople);
  };
  return (
    <React.Fragment>
      {persone.map((el) => {
        const { id, name } = el;
        return (
          <div key={id} className='item shadow'>
            <h5>{name}</h5>
            <button
              type='button'
              className='button delete-button'
              onClick={() => removeItem(id)}
            >
              {" "}
              x{" "}
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ArrayState;
