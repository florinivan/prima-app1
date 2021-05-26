import React from "react";

const ComponentCard = (props) => {
  const stylep = { textTransform: "uppercase" };
  const { img, prezzo, alt, statto, desc } = props;
  const handleClick = (prezzo) => {
    console.log(prezzo);
  };
  const eventHandler = (prezzo) => (e) => {
    console.log(e.target.innerText);
    alert(prezzo);
  };
  return (
    <article>
      <div className='card'>
        <img src={img} alt={`${alt} ${prezzo} €`} className='img'></img>
        <h6>{desc}</h6>
        <br />
        <p>{prezzo}</p>
      </div>
      <p style={stylep}>{statto}</p>
      <button onClick={() => alert(`${desc}: ${prezzo}`)}>aggiungi</button>
      <button onClick={() => handleClick(prezzo)}>aggiungi</button>
      <button onClick={eventHandler(prezzo)}>aggiungi</button>
      <button onClick={props.onTap}>tap</button>
    </article>
  );
};

export default ComponentCard;
