const nome =  prompt("come ti chiami?")
const cognome = prompt("come fai di cogome?")
const colorepreferito = prompt("qual'è il tuo colore preferito?")
const numero = 21 

document.getElementById('frase').innerHTML = `<p>Ciao mi chiamo ${cognome} ${nome} ed il mio colore preferito è il ${colorepreferito}</p>`

document.getElementById('frase').innerHTML = `${nome + cognome + colorepreferito + numero}`