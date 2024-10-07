"use strict";
class User {
  constructor(name, lastName) {
    this.credito = 0;
    this.numeroChiamate = 0;
    this.name = name;
    this.lastName = lastName;
  }
  ricarica(ammontare) {
    this.credito += ammontare;
  }
  chiamata(minutiDurata) {
    if (this.credito - minutiDurata * 0.2 < 0) {
      console.log("Impossibile effettuare la chiamata");
      return;
    }

    this.credito -= minutiDurata * 0.2;
    this.numeroChiamate += 1;
  }
  azzeraChiamate() {
    this.numeroChiamate = 0;
  }
  get numero404() {
    return this.credito;
  }
  get getNumeroChiamate() {
    return this.numeroChiamate;
  }
}
const me = new User("Gigi", "Trottola");
me.ricarica(10);
me.chiamata(1);
me.chiamata(1);
me.chiamata(2);
me.chiamata(6);
console.log(me.numero404);
console.log(me.getNumeroChiamate);
me.azzeraChiamate();
