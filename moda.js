let numeros = [6, 5, 5, 6, 4, 4, 7, 5];
let moda;
let contagemModa = 0;

for (let i = 0; i < numeros.length; i++) {
    let contador = 0;
    for (let j = 0; j < numeros.length; j++) {
        if (numeros[j] === numeros[i]) {
            contador++;
        }
    }
    if (contador > contagemModa) {
        contagemModa = contador;
        moda = numeros[i];
    }
}

console.log("A moda é:", moda);




 