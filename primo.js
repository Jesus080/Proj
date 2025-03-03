function esPrimo(numero) {
    if (numero < 2) return false; // 0 y 1 no son primos
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false; // Si es divisible por otro número, no es primo
    }
    return true;
}

function primosEnRango(inicio, fin) {
    let primos = [];
    for (let i = inicio; i <= fin; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    return primos;
}

// Ejemplo de usooooo
console.log(primosEnRango(1, 50)); 
