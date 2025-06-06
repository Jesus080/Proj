function encontrarMaximo(arr) {
    if (arr.length === 0) {
        return "El arreglo está vacío";
    }

    let maximo = arr[0]; // Suponemos que el rimer elemento es el más grande 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maximo) {
            maximo = arr[i];
        }
    }

    return maximo;
}

// Ejemplo de uso
let numeros = [12, 45, 67, 89, 23, 90, 34, 40, 67];
console.log("El número más grande es:", encontrarMaximo(numeros));
