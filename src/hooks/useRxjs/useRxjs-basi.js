import React, { useEffect, useState } from "react";
import { of } from "rxjs";
import List from "./List"

const source = ["Adam", "Brian", "Christine"];
const names$ = of(source);

const UseRxjsBasi = () => {
  const [names, setNames] = useState();
  useEffect(() => {
    const subscription = names$.subscribe(setNames);
    return () => subscription.unsubscribe();
  });
  return (
    <div>
      <h1>RxJS with React</h1>
      <List items={names} />
    </div>
  );
};

export default UseRxjsBasi;
