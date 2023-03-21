const nome =  prompt("come ti chiami?")
const cognome = prompt("come fai di cogome?")
const colorepreferito = prompt("qual'è il tuo colore preferito?")

document.getElementById('frase').innerHTML = `<p>Ciao mi chiamo ${cognome} ${nome} ed il mio colore preferito è il ${colorepreferito}</p>`

document.writeln("<p>"+ nome + cognome + colorepreferito +"21</p>")