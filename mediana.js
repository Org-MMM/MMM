let numero = [6, 5, 5, 6, 4, 4, 7, 5];


for (let i = 0; i < numero.length; i++) {
    for (let j = 0; j < numero.length - 1 - i; j++) {
        if (numero[j] > numero[j + 1]) {

            let temp = numero[j];
            numero[j] = numero[j + 1];
            numero[j + 1] = temp;
        }
    }
}


let mediana;
let meio = Math.floor(numero.length / 2);

if (numero.length % 2 === 1) {

    mediana = numero[meio];
} else {

    mediana = (numero[meio - 1] + numero[meio]) / 2;
}


console.log("A mediana é:", mediana);
