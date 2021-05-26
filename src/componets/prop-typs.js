import React from "react";
import PropTypes from "prop-types";
const defaultImage =
  "https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0";

const Prodotto = ({ nome, image, prezzo }) => {
  const img = image && image.url;

  return (
    <article className='card shadow my-3 p-2'>
      <div className='card-body'>
        <img
          src={img || defaultImage}
          alt={nome || "divano default"}
          className='card-img-top'
        />
        <div className='card-text'>
          <h4 className='card-title'>{nome || "divano default"}</h4>
          <p className='card-subtitle'>€ {prezzo || 7.99}</p>
        </div>
      </div>
    </article>
  );
};

Prodotto.propTypes = {
  nome: PropTypes.string.isRequired,
  prezzo: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};

export default Prodotto;
