let numero = [6, 5, 5, 6, 4, 4, 7, 5];

let soma = 0;
for (let i = 0; i < numero.length; i++) {
  soma += numero[i];
}
let media = soma / numero.length;

let mediaInteira = Math.round(media);

console.log("Média:", mediaInteira);

