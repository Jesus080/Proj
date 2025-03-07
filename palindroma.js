function esPalindromo(palabra) {
    let palabraLimpia = palabra.toLowerCase().replace(/\s/g, ""); // Convertimos a minúsculas y eliminamos espacios
    let palabraInvertida = palabraLimpia.split("").reverse().join(""); // Invertimos la palabra

    return palabraLimpia === palabraInvertida;
}

// Ejemplo de uso
console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("hola")); // false
console.log(esPalindromo("Anita lava la tina")); // true
