console.log("Esercizio PW Generator");

var name = prompt ("Inserisci il tuo nome:")
var surname = prompt ("Inserisci il tuo cognome:")
var realAge = prompt ("Inserisci la tua età:")
var age = prompt ("Mentre gli altri quanti te ne danno? ;-):")
var color = prompt ("Inserisci il tuo colore preferito:")

var x = (parseInt(realAge) + parseInt(age)) / 2;

document.getElementById("pwGenerator").innerHTML = name + surname + color + x;