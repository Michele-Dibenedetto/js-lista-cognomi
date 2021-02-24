// creo un arrey che contiene la lista dei cognomi
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// chiedo all'utente di inserire il sio cognome
var new_cognome = prompt("inserisci il tuo cognome");

// aggiungo il cognome dell'utente alla lista dei cognomi
cognomi.push(new_cognome);

// sistemo la lista di cognomi in ordine alfabetico
cognomi.sort();
console.log(cognomi);

// creo una variabile per passare tra una variabile all'altra dell'arrey
var i = 0;
// creo un ciclo che termina quando il cognome inserito dall'utente è uguale alla posizione del cognome dell'utente stesso all'interno dell'arrey
while (new_cognome != cognomi[i]) {
    i++;
}
alert("la posizione del cognome dell'utente è: " + ++i );
// stampo su html la lista dei cognomi
for (var c = 0; c < cognomi.length; c++) {
    document.getElementById("lista_cognomi").innerHTML += "<li>" + cognomi[c] + "</li>";
}



// VARIANTE CON IL FOR
// ricerco la posizione del cognome dell'utente e ne stampo la posizione
// var posizione;
// for (var i = 0; i < cognomi.length; i++) {
//     if (new_cognome == cognomi[i]) {
//         posizione = i + 1;
//         console.log(posizione);
//     }
// }
// alert("la posizione del cognome dell'utente è: " + posizione);



