import React, { useRef } from "react";

const UseRefEx = () => {
  const titolo = useRef(null);
  const inputRef = useRef(null);
  const callSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    console.log(titolo.current.innerHTML);
  };
  return (
    <div>
      <h2 ref={titolo}> Titolo</h2>
      <form onSubmit={callSubmit}>
        <input type='text' ref={inputRef} />
        <button className='button' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default UseRefEx;
