function factorial(n) {
    if (n < 0) {
        return "No se puede calcular el factorial de un número negativo";
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Ejemplo de uso
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(7)); // 5040
