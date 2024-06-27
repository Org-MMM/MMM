let numero = [6, 5, 5, 6, 4, 4, 7, 5];

let soma = 0;
for (let i = 0; i < numero.length; i++) {
  soma += numero[i];
}
let media = soma / numero.length;

let mediaInteira = Math.round(media);

console.log("-".repeat(17))

console.log("| A média é: ", mediaInteira +" |");

console.log("-".repeat(17))
