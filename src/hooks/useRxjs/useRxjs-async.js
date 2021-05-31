import React, { useEffect, useState } from "react";
import { interval } from "rxjs";
import { map } from "rxjs/operators";
import List from "./List";

const source = ["Adam", "Brian", "Christine", "Mary"];
const names$ = interval(1000).pipe(map((i) => source.slice(0, i + 1)));

const UseRxjsAsync = () => {
  const [names, setNames] = useState();
  useEffect(() => {
    const subscription = names$.subscribe(setNames);
    return () => subscription.unsubscribe();
  }, []);
  return (
    <div>
      <h1>RxJS with React</h1>
      <List items={names} />
    </div>
  );
};

export default UseRxjsAsync;
