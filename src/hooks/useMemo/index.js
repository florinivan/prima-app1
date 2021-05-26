import React, { useMemo, useState } from "react";
import useFetch from "../custom/useFetch";
const url = "https://api.github.com/users";
function Index() {
  const cercaMaggiore = (dati) => {
    console.log("trova magiore");
    return dati.reduce((max, item) => {
      if (item.id > max) {
        max = item.id;
      }
      return max;
    }, 0);
  };
  const [valore, setValore] = useState(0);
  const cambiaValore = () => {
    //setValore((oldValore) => oldValore + 1);
  };
  const { data } = useFetch(url);
  useMemo(() => setValore(cercaMaggiore(data)), [data]);
  return (
    <>
      <h2>{valore}</h2>
      <button onClick={cambiaValore}>cambia valore</button>
      {data.map((item) => {
        return <Elenco key={item.id} {...item} />;
      })}
    </>
  );
}

const Elenco = React.memo(({ avatar_url: image, login: name }) => {
  return (
    <article className='card bg-white my-3 shadow-sm'>
      <img
        src={image}
        alt={name}
        className='img my-3'
        style={{ width: "30%", borderRadius: "50%", margin: "auto" }}
      />
      <h4>{name}</h4>
    </article>
  );
});

export default Index;
