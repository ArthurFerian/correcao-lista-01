
const tempCelsius = [0, 10, 20, 30, 40];

let tempFahrenheit = [];

for (let i = 0; i < tempCelsius.length; i++) { // Usei o for com as temperaturas convertidas para Fahrenheit usando a fórmula: F = C * 9/5 + 32.
    tempFahrenheit[i] = tempCelsius[i] * 9/5 + 32
}

console.table(tempCelsius);
console.table(tempFahrenheit);