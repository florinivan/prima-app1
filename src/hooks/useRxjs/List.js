import React from "react";

const List = ({ items }) => {
  return (
    <>
      <ul>
        {items && items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </>
  );
};

export default List;
