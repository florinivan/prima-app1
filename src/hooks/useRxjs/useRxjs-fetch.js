import React from "react";
import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";
import List from "./List";
import { useObservable } from "./useObservable";

const url = `https://randomuser.me/api/?results=5&seed=rx-react&nat=us&inc=name&noinfo`;
const getName = (user) => `${user.name.first} ${user.name.last}`;
const names$ = ajax
  .getJSON(url)
  .pipe(map(({ results: users }) => users.map(getName)));

const UseRxjsAsync = () => {
  const names = useObservable(names$);
  return (
    <div>
      <h1>RxJS with React</h1>
      <List items={names} />
    </div>
  );
};

export default UseRxjsAsync;
