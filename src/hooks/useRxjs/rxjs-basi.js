import { Observable } from "rxjs";

/**
 * React utilizza un'architettura basata su pull. Significa che quando React ha bisogno di rieseguire il rendering, chiamerà la funzione di rendering di ogni componente interessato.
 * Restituirà una nuova rappresentazione dell'interfaccia utente, che React può riconciliare con quella precedente.
 * Eventuali modifiche vengono quindi propagate al DOM. Questo tipo di comportamento è chiamato <<pull>> perché il consumatore (in questo caso, React),
 * è quello che richiede il nuovo valore.
 * D'altra parte, RxJS utilizza un approccio basato su <<push>>, in cui si definiscono in modo dichiarativo i flussi e le loro relazioni, e RxJS propagherà ogni modifica da un flusso a
 * quello successivo. Questo si chiama push perché ora il produttore dello stato è responsabile della consegna del nuovo valore a coloro che da esso dipendono.
 * React con RxJS colma il divario tra questi due comportamenti, rendendo possibile dichiarare uno stato dell'applicazione basato su push che funziona perfettamente con React basato su pull
 */
const first5Numbers = new Observable((obs) => {
  console.log("hello!");
  for (let i = 0; i < 5; i++) obs.next(i);
  obs.complete();
});
// I flussi RxJS vengono utilizzati per rappresentare eventi o modificare i valori nel tempo. Hanno una proprietà importante: a causa della loro natura dichiarativa, non eseguono l'effetto finché qualcuno non lo sottoscrive
first5Numbers.subscribe((n) => {
  console.log(n);
});
