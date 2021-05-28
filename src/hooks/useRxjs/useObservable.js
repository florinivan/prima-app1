import { useEffect, useState } from "react";

/**
 * Custom hooks per la sottoscrizione osservabile che viene utilizzato dai
 * componenti React per iscriversi ai messaggi inviati a un osservabile
 * @param {Observable from RxJS} observable
 * @returns
 */
export const useObservable = (observable) => {
  const [state, setState] = useState();

  useEffect(() => {
    const sub = observable.subscribe(setState);
    return () => sub.unsubscribe();
  }, [observable]);

  return state;
};
