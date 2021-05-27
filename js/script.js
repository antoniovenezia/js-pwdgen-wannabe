console.log("Esercizio PW Generator");

var name = prompt ("Inserisci il tuo nome:")
var surname = prompt ("Inserisci il tuo cognome:")
var color = prompt ("Inserisci il tuo colore preferito:")

document.getElementById("pw-generator").innerHTML = name + surname + color + 21;